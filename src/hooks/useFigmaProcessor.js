import { useState, useEffect } from 'react';

// 组件映射配置
const componentMapping = {
  "MyButton": "FigmaButton",
  "SecondaryButton": "FigmaButton"
};

// 样式映射表
const styleMapping = {
  dimensions: {
    width: (value) => ({ width: `${value}px` }),
    height: (value) => ({ height: `${value}px` }),
  },
  position: {
    x: (value) => ({ left: `${value}px` }),
    y: (value) => ({ top: `${value}px` }),
  },
  fills: {
    'GRADIENT_LINEAR': (gradientStops) => ({
      background: `linear-gradient(90deg, ${gradientStops.map(stop => stop.color.hex).join(', ')})`
    }),
    'SOLID': (color) => ({
      backgroundColor: color.hex
    }),
  },
  opacity: (value) => ({ opacity: value }),
  visible: (value) => ({ display: value ? 'block' : 'none' }),
  cornerRadius: (value) => ({ borderRadius: `${value}px` }),
  strokes: {
    'SOLID': (color, weight = 1) => ({
      border: `${weight}px solid ${color.hex}`
    }),
  },
  effects: {
    'DROP_SHADOW': (effect) => ({
      boxShadow: `${effect.offset.x}px ${effect.offset.y}px ${effect.radius}px ${effect.color.hex}`
    }),
  }
};

// 转换 Figma 属性为 CSS 样式
const convertFigmaToStyles = (node) => {
  const styles = {};
  
  if (node.layout?.dimensions) {
    const { width, height } = node.layout.dimensions;
    if (width) Object.assign(styles, styleMapping.dimensions.width(width));
    if (height) Object.assign(styles, styleMapping.dimensions.height(height));
  }
  
  if (node.layout?.position) {
    const { x, y } = node.layout.position;
    if (x !== undefined) Object.assign(styles, styleMapping.position.x(x));
    if (y !== undefined) Object.assign(styles, styleMapping.position.y(y));
  }
  
  if (node.fills && node.fills.length > 0) {
    const fill = node.fills[0];
    if (fill.type === 'GRADIENT_LINEAR' && fill.gradientStops) {
      Object.assign(styles, styleMapping.fills['GRADIENT_LINEAR'](fill.gradientStops));
    } else if (fill.type === 'SOLID' && fill.color) {
      Object.assign(styles, styleMapping.fills['SOLID'](fill.color));
    }
  }
  
  if (node.opacity !== undefined) {
    Object.assign(styles, styleMapping.opacity(node.opacity));
  }
  
  if (node.visible !== undefined) {
    Object.assign(styles, styleMapping.visible(node.visible));
  }
  
  if (node.cornerRadius !== undefined) {
    Object.assign(styles, styleMapping.cornerRadius(node.cornerRadius));
  }
  
  if (node.strokes && node.strokes.length > 0) {
    const stroke = node.strokes[0];
    if (stroke.type === 'SOLID' && stroke.color) {
      Object.assign(styles, styleMapping.strokes['SOLID'](stroke.color, stroke.weight));
    }
  }
  
  if (node.effects && node.effects.length > 0) {
    const effect = node.effects[0];
    if (effect.type === 'DROP_SHADOW') {
      Object.assign(styles, styleMapping.effects['DROP_SHADOW'](effect));
    }
  }
  
  return styles;
};

// 提取组件属性
const extractComponentProps = (node) => {
  const props = {};

  if (node.children) {
    const textNode = node.children.find(child => child.type === 'TEXT');
    if (textNode && textNode.text) {
      props.children = textNode.text;
    }
  }

  if (node.fills) {
    const fill = node.fills[0];
    if (fill && fill.type === 'GRADIENT_LINEAR') {
      props.variant = 'gradient';
      props.gradientStops = fill.gradientStops;
    } else if (fill && fill.color) {
      props.variant = 'solid';
      props.color = fill.color;
    }
  }

  if (node.layout && node.layout.dimensions) {
    const { width, height } = node.layout.dimensions;
    if (width && height) {
      props.width = width;
      props.height = height;
      
      if (width < 200 && height < 50) {
        props.size = 'small';
      } else if (width > 300 || height > 80) {
        props.size = 'large';
      } else {
        props.size = 'medium';
      }
    }
  }

  if (node.layout && node.layout.position) {
    const { x, y } = node.layout.position;
    if (x !== undefined && y !== undefined) {
      props.x = x;
      props.y = y;
    }
  }

  if (node.children) {
    const hasIcon = node.children.some(child => 
      child.type === 'IMAGE-SVG' || 
      (child.name && child.name.toLowerCase().includes('icon'))
    );
    props.withIcon = hasIcon;
  }

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

// 查找匹配的组件
const findMatchingComponents = (nodes) => {
  const matches = [];
  
  const searchNodes = (nodeList) => {
    if (!Array.isArray(nodeList)) return;
    
    nodeList.forEach(node => {
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
      
      if (node.children) {
        searchNodes(node.children);
      }
    });
  };

  searchNodes(nodes);
  return matches;
};

// 自定义 Hook
export const useFigmaProcessor = (figmaData) => {
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!figmaData) return;

    setLoading(true);
    setError(null);

    try {
      const processedComponents = findMatchingComponents(figmaData.nodes);
      setComponents(processedComponents);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [figmaData]);

  return { components, loading, error };
};

// 默认的模拟数据
export const getDefaultFigmaData = () => ({
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
    }
  ]
});
