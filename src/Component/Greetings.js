import React from 'react';

export default function Greetings(props) {
  let text = '';
  if (props.lang === 'de') {
    text = 'Hallo';
  } else if (props.lang === 'en') {
    text = 'Hello';
  } else if (props.lang === 'es') {
    text = 'Hola';
  } else text = 'Bonjour';

  return (
    <div>
      {text} {props.children}
    </div>
  );
}
