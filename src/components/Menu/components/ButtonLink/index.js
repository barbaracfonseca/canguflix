/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function ButtonLink(props) {
  // props => {object, propreties for another components className: "something that pass"}
  // href:"/"
  // console.log(props);
  return (
  // href is variable
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
