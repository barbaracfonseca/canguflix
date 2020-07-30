import styled from "styled-components";

// crazi` => this index has a constant that we have a tag and the crazi is the tag of template string pertence the js.
const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
  
    &:hover,
    &:focus {
      opacity: .5;
    }
`;

export default Button;