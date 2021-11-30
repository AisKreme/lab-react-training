import React from 'react';
import Rating from './Rating';

export default function DriverCard(props) {
  let { name } = props;
  let { rating } = props;
  let { img } = props;
  let { model } = props.car;
  let { licensePlate } = props.car;

  return (
    <div>
      <img src={img} alt="" height="200" />
      <h1>{name}</h1>
      <Rating>{rating}</Rating>
      <p>
        {model} - {licensePlate}
      </p>
    </div>
  );
}
