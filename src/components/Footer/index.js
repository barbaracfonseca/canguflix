import React from 'react';
import { FooterBase } from './styles';

import smalllogo from '../../assets/img/smalllogo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={smalllogo} alt="Logo CanguFlix" />
      </a>
      <p>
        Proudly created with care during the final project of college by
        {' '}
        <a href="www.linkedin.com/in/barbara-cangucu-fonseca">
          Barbara C Fonseca
        </a>

        ☘️

        <a href="https://www.alura.com.br/">
          Alura's React Immersion
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
