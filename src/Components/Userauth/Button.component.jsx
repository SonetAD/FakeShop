import './Button.style.scss';
import { useRef } from 'react';

export default function Button({
  children,
  handleClick = (e) => {
    e.preventDefault();
    console.log('clicked');
  },
  ...otherProps
}) {
  const buttonEl = useRef(null);
  const dynamicStyle = {
    color: otherProps.color,
    backgroundColor: otherProps.bgColor,
  };
  function handleOver(e) {
    buttonEl.current.style.background = otherProps.hbgColor;
    buttonEl.current.style.color = otherProps.hColor;
    e.preventDefault();
  }
  function handleOut(e) {
    buttonEl.current.style.background = otherProps.bgColor;
    buttonEl.current.style.color = otherProps.color;
    e.preventDefault();
  }
  return (
    <button
      onClick={handleClick}
      onMouseMove={handleOver}
      onMouseOut={handleOut}
      style={dynamicStyle}
      ref={buttonEl}
      type={otherProps.type}
    >
      {children}
    </button>
  );
}
