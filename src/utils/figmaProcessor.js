// Figma 设计数据处理工具

// 简化的组件映射配置
export const componentMapping = {
  "MyButton": "FigmaButton",
  "SecondaryButton": "FigmaButton"
};

// 样式映射表 - Figma 属性到 CSS 样式的映射
export const styleMapping = {
  // 尺寸映射
  dimensions: {
    width: (value) => ({ width: `${value}px` }),
    height: (value) => ({ height: `${value}px` }),
  },
  
  // 位置映射
  position: {
    x: (value) => ({ left: `${value}px` }),
    y: (value) => ({ top: `${value}px` }),
  },
  
  // 填充映射
  fills: {
    'GRADIENT_LINEAR': (gradientStops) => ({
      background: `linear-gradient(90deg, ${gradientStops.map(stop => stop.color.hex).join(', ')})`
    }),
    'SOLID': (color) => ({
      backgroundColor: color.hex
    }),
  },
  
  // 透明度映射
  opacity: (value) => ({ opacity: value }),
  
  // 可见性映射
  visible: (value) => ({ display: value ? 'block' : 'none' }),
  
  // 文本样式映射
  text: {
    fontSize: (value) => ({ fontSize: `${value}px` }),
    fontWeight: (value) => ({ fontWeight: value }),
    color: (value) => ({ color: value.hex }),
  },
  
  // 边框映射
  strokes: {
    'SOLID': (color, weight = 1) => ({
      border: `${weight}px solid ${color.hex}`
    }),
  },
  
  // 圆角映射
  cornerRadius: (value) => ({ borderRadius: `${value}px` }),
  
  // 阴影映射
  effects: {
    'DROP_SHADOW': (effect) => ({
      boxShadow: `${effect.offset.x}px ${effect.offset.y}px ${effect.radius}px ${effect.color.hex}`
    }),
  }
};

/**
 * 将 Figma 属性转换为 CSS 样式对象
 * @param {Object} node - Figma 节点对象
 * @returns {Object} CSS 样式对象
 */
export const convertFigmaToStyles = (node) => {
  const styles = {};
  
  // 处理尺寸
  if (node.layout?.dimensions) {
    const { width, height } = node.layout.dimensions;
    if (width) Object.assign(styles, styleMapping.dimensions.width(width));
    if (height) Object.assign(styles, styleMapping.dimensions.height(height));
  }
  
  // 处理位置
  if (node.layout?.position) {
    const { x, y } = node.layout.position;
    if (x !== undefined) Object.assign(styles, styleMapping.position.x(x));
    if (y !== undefined) Object.assign(styles, styleMapping.position.y(y));
  }
  
  // 处理填充
  if (node.fills && node.fills.length > 0) {
    const fill = node.fills[0];
    if (fill.type === 'GRADIENT_LINEAR' && fill.gradientStops) {
      Object.assign(styles, styleMapping.fills['GRADIENT_LINEAR'](fill.gradientStops));
    } else if (fill.type === 'SOLID' && fill.color) {
      Object.assign(styles, styleMapping.fills['SOLID'](fill.color));
    }
  }
  
  // 处理透明度
  if (node.opacity !== undefined) {
    Object.assign(styles, styleMapping.opacity(node.opacity));
  }
  
  // 处理可见性
  if (node.visible !== undefined) {
    Object.assign(styles, styleMapping.visible(node.visible));
  }
  
  // 处理圆角
  if (node.cornerRadius !== undefined) {
    Object.assign(styles, styleMapping.cornerRadius(node.cornerRadius));
  }
  
  // 处理边框
  if (node.strokes && node.strokes.length > 0) {
    const stroke = node.strokes[0];
    if (stroke.type === 'SOLID' && stroke.color) {
      Object.assign(styles, styleMapping.strokes['SOLID'](stroke.color, stroke.weight));
    }
  }
  
  // 处理阴影效果
  if (node.effects && node.effects.length > 0) {
    const effect = node.effects[0];
    if (effect.type === 'DROP_SHADOW') {
      Object.assign(styles, styleMapping.effects['DROP_SHADOW'](effect));
    }
  }
  
  return styles;
};

/**
 * 处理 Figma 设计数据，查找匹配的组件
 * @param {Array} nodes - Figma 节点数组
 * @returns {Array} 匹配的组件数组
 */
export const findMatchingComponents = (nodes) => {
  const matches = [];
  
  const searchNodes = (nodeList) => {
    if (!Array.isArray(nodeList)) return;
    
    nodeList.forEach(node => {
      // 检查是否有匹配的组件名称
      if (node.name && componentMapping[node.name]) {
        const reactComponent = componentMapping[node.name];
        const props = extractComponentProps(node);
        const styles = convertFigmaToStyles(node);
        
        matches.push({
          figmaName: node.name,
          reactComponent: reactComponent,
          nodeId: node.id,
          props: props,
          styles: styles
        });
      }
      
      // 递归搜索子节点
      if (node.children) {
        searchNodes(node.children);
      }
    });
  };

  searchNodes(nodes);
  return matches;
};

/**
 * 提取组件属性
 * @param {Object} node - Figma 节点对象
 * @returns {Object} 组件属性对象
 */
export const extractComponentProps = (node) => {
  const props = {};

  // 提取文本内容
  if (node.children) {
    const textNode = node.children.find(child => child.type === 'TEXT');
    if (textNode && textNode.text) {
      props.children = textNode.text;
    }
  }

  // 提取 Figma 节点的属性
  if (node.fills) {
    // 处理填充颜色
    const fill = node.fills[0];
    if (fill && fill.type === 'GRADIENT_LINEAR') {
      props.variant = 'gradient';
      props.gradientStops = fill.gradientStops;
    } else if (fill && fill.color) {
      props.variant = 'solid';
      props.color = fill.color;
    }
  }

  // 提取尺寸信息
  if (node.layout && node.layout.dimensions) {
    const { width, height } = node.layout.dimensions;
    if (width && height) {
      props.width = width;
      props.height = height;
      
      // 根据尺寸判断大小
      if (width < 200 && height < 50) {
        props.size = 'small';
      } else if (width > 300 || height > 80) {
        props.size = 'large';
      } else {
        props.size = 'medium';
      }
    }
  }

  // 提取位置信息
  if (node.layout && node.layout.position) {
    const { x, y } = node.layout.position;
    if (x !== undefined && y !== undefined) {
      props.x = x;
      props.y = y;
    }
  }

  // 检查是否有图标
  if (node.children) {
    const hasIcon = node.children.some(child => 
      child.type === 'IMAGE-SVG' || 
      (child.name && child.name.toLowerCase().includes('icon'))
    );
    props.withIcon = hasIcon;
  }

  // 提取其他 Figma 属性
  if (node.opacity !== undefined) {
    props.opacity = node.opacity;
  }

  if (node.visible !== undefined) {
    props.visible = node.visible;
  }

  if (node.name) {
    props.className = node.name.toLowerCase().replace(/\s+/g, '-');
  }

  return props;
};

/**
 * 获取模拟的 Figma 设计数据
 * @returns {Object} 模拟的 Figma 设计数据
 */
export const getMockFigmaData = () => {
  return {
    nodes: [
      {
        id: '1228:640',
        name: 'MyButton',
        type: 'FRAME',
        fills: [
          {
            type: 'GRADIENT_LINEAR',
            gradientStops: [
              { color: { hex: '#01E47B' } },
              { color: { hex: '#03C3F0' } }
            ]
          }
        ],
        opacity: 1,
        visible: true,
        cornerRadius: 8,
        strokes: [
          {
            type: 'SOLID',
            color: { hex: '#FFFFFF' },
            weight: 2
          }
        ],
        effects: [
          {
            type: 'DROP_SHADOW',
            color: { hex: '#000000' },
            offset: { x: 0, y: 4 },
            radius: 8
          }
        ],
        children: [
          {
            id: '1228:641',
            name: 'Get Early Acces',
            type: 'TEXT',
            text: 'Get Early Acces',
            fills: [
              {
                type: 'SOLID',
                color: { hex: '#FFFFFF' }
              }
            ]
          }
        ],
        layout: {
          dimensions: {
            width: 661.05,
            height: 59.2
          },
          position: {
            x: 100,
            y: 200
          }
        }
      },
      {
        id: '1228:642',
        name: 'SecondaryButton',
        type: 'FRAME',
        fills: [
          {
            type: 'SOLID',
            color: { hex: '#F0F0F0' }
          }
        ],
        opacity: 0.9,
        visible: true,
        cornerRadius: 4,
        children: [
          {
            id: '1228:643',
            name: 'Cancel',
            type: 'TEXT',
            text: 'Cancel',
            fills: [
              {
                type: 'SOLID',
                color: { hex: '#333333' }
              }
            ]
          }
        ],
        layout: {
          dimensions: {
            width: 120,
            height: 40
          },
          position: {
            x: 300,
            y: 200
          }
        }
      }
    ]
  };
};

/**
 * 处理 Figma 设计数据并返回匹配的组件
 * @param {Object} figmaData - Figma 设计数据
 * @returns {Array} 匹配的组件数组
 */
export const processFigmaData = (figmaData) => {
  return findMatchingComponents(figmaData.nodes);
};

/**
 * 示例：展示样式映射系统的优势
 * 这个函数展示了如何通过映射表快速处理不同的 Figma 属性
 */
export const demonstrateStyleMapping = () => {
  const exampleNodes = [
    {
      name: 'GradientButton',
      fills: [{ type: 'GRADIENT_LINEAR', gradientStops: [{ color: { hex: '#FF0000' } }, { color: { hex: '#00FF00' } }] }],
      layout: { dimensions: { width: 200, height: 50 } },
      cornerRadius: 10
    },
    {
      name: 'SolidButton', 
      fills: [{ type: 'SOLID', color: { hex: '#0000FF' } }],
      layout: { dimensions: { width: 150, height: 40 } },
      opacity: 0.8
    },
    {
      name: 'ShadowButton',
      fills: [{ type: 'SOLID', color: { hex: '#FFFFFF' } }],
      effects: [{ type: 'DROP_SHADOW', color: { hex: '#000000' }, offset: { x: 2, y: 2 }, radius: 4 }],
      layout: { dimensions: { width: 180, height: 45 } }
    }
  ];

  return exampleNodes.map(node => ({
    name: node.name,
    styles: convertFigmaToStyles(node)
  }));
};
