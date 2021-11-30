import React from 'react';

export default function Random(props) {
  let { min } = props;
  let { max } = props;

  let random = Math.floor(Math.random() * (max - min) + min);
  return <div>{random}</div>;
}
