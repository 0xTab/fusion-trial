// MyButton.jsx
import React from 'react';

const MyButton = ({ text, variant }) => {
  const style = {
    padding: '10px 20px',
    borderRadius: '4px',
    background: variant === 'primary' ? 'blue' : 'gray',
    color: 'blue',
  };
  return <button style={style}>{text}</button>;
};

export default MyButton;