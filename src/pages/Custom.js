// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';

function Custom() {
  const [content, setContent] = useState(null);

  // 获取 Builder.io 内容
  useEffect(() => {
    builder
      .get('page', { url: '/components' }) // 使用 page 模型或自定义模型
      .promise()
      .then((response) => setContent(response))
      .catch((error) => console.error('Error fetching Builder content:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Component Showcase</h1>
      {content ? (
        <BuilderComponent model="page" content={content} />
      ) : (
        <div>Loading...</div>
      )}
      <footer style={{ marginTop: '20px' }}>Static Footer</footer>
    </div>
  );
}

export default Custom;