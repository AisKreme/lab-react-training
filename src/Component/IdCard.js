import React from 'react';

export default function IdCard(props) {
  return (
    <div>
      First name: {props.firstName}
      Last name: {props.lastName}
      Gender: {props.gender}
      Height: {props.height}
      Birth: {props.birth.toDateString()};
      <img src={props.picture} alt="profilpicture" />
    </div>
  );
}
