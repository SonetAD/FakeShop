import './Forminput.style.scss';
export default function Forminput({
  handleChange,
  label,
  size,
  ...otherProps
}) {
  let pd = '5px';
  let lPd = 0;
  if (size === 'md') {
    pd = '5px 30px';
    lPd = 50;
  } else if (size === 'bg') {
    pd = '5px 60px';
    lPd = 110;
  } else {
    pd = pd;
    lPd = lPd;
  }
  let dynamicInputStyle = {
    padding: pd,
  };
  let dynamicLabelStyle = {
    left: `-${220 + lPd}px`,
  };
  return (
    <div className='forminput'>
      <input
        onMouseOver={(e) => {
          e.target.focus();
        }}
        style={dynamicInputStyle}
        className='input'
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          style={dynamicLabelStyle}
          className={otherProps.value.length ? 'label shirnk' : 'label'}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
