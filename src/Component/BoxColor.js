import React from 'react';

export default function BoxColor(props) {
  let r = props.r;
  let g = props.g;
  let b = props.b;

  let divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };
  function componentToHex(color) {
    let hex = color.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  return (
    <div style={divStyle}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}
