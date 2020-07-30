import React from 'react';

function ButtonLink(props){
    //props => {object, propreties for another components className: "something that pass"}
    //href:"/"
    console.log(props);
    return(
        // href is variable
     <a href= {props.href} className={props.className}>
         New video
     </a>
    );
}

export default ButtonLink;