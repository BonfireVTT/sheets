import styled from 'styled-components';

const Label = styled.label`
  font-size: 0.7rem;
  font-weight: var(--font-weight-bold);
  text-align: center;
  text-transform: uppercase;
  transform-origin: center;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding: 0.1em 0.5em;

  span {
    font-weight: 400;
  }

  input {
    background: 0;
    border-radius: 0.2em;
    font-size: var(--font-size-md);
    text-align: center;
    width: 100%;

    &:focus {
      outline: 0;
    }
  }
`;

const Container = styled.label`
  border: 0;
  width: 65px;
  height: 85px;
  padding-top: 5px;
  position: relative;

  &::after {
    display: none;
  }

  &::before {
    background-image: url("icons/shield.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    content: "";
    filter: drop-shadow(0px 0px 4px rgba(249, 198, 91, 0));
    height: 100%;
    position: absolute;
    top: 0;
    transition: filter 0.2s ease-in-out;
    width: 100%;
    z-index: -1;
  }

  &:focus-within {
    &::before {
      filter: drop-shadow(0px 0px 4px rgba(249, 198, 91, 1));
    }
  }

  span {
    top: 0;
  }

  input {
    height: 100%;
    padding-top: 0.8em;
    font-size: var(--font-size-lg);
    position: absolute;
    left: 0;
    top: 0;
  }

  ${Label} {
    line-height: 1;
    
    span {
      margin-top: 0px;
    }
  }
`;

const Styles = {
  Container,
  Label,
};

export default Styles;
