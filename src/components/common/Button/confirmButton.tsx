import React, { useState } from 'react';

function Button(props: any) {
  const [text, setText] = useState('CLICK TO CONFIRM');
  function handleClick() {
    setText('CONFIRMED');
  }
  return <button onClick={handleClick}>{text || props.text}</button>;
}

export default Button;
