import React from 'react';
import Visa from '../assets/images/visa.png';
import MasterCard from '../assets/images/master-card.svg';

export default function CreditCard(props) {
  let imgSrc = '';

  if (props.type === 'Visa') {
    imgSrc = Visa;
  } else if (props.type === 'Master Card') {
    imgSrc = MasterCard;
  }

  let number = props.number;
  number = number.slice(12);

  return (
    <div style={{ background: props.bgColor, color: props.color }}>
      <div>
        <img src={imgSrc} alt="CreditCard"></img>
      </div>
      <h1>**** **** **** {number}</h1>
      <div>
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
      </div>
      <p>{props.owner}</p>
    </div>
  );
}
