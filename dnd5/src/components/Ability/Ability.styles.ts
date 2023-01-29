import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  margin: 0;
`;

const Inner = styled.div`
  align-items: center;
  display: flex;
  height: 45px;
  justify-content: center;
  margin: 1em 0.5em 2em 0.5em;
  position: relative;
  width: 45px;

  &::after {
    box-shadow: 0 0 10px var(--accent-light);
    content: "";
    height: 100%;
    opacity: 0;
    transform: rotate(45deg);
    transition: opacity 0.2s ease-in-out;
    width: 100%;
    z-index: -1;
  }

  &:focus-within {
    &::after {
      opacity: 0.6;
    }
  }
`;

const Score = styled.div`
  border: 3px double var(--accent);
  border-left-color: var(--accent-light);
  border-right-color: var(--accent-dark);
  height: 45px;
  left: 0; 
  position: absolute; 
  top: 0; 
  transform: rotate(45deg); 
  width: 45px;
`;

const Modifier = styled.span`
  align-items: center;
  background: var(--primary-dark);
  border-radius: 100%;
  border: 3px double var(--accent-light);
  bottom: -28px;
  display: flex;
  font-size: var(--font-size-sm);
  height: 30px;
  justify-content: center;
  position: absolute;
  width: 30px;
`;

const Input = styled.input`
  -moz-appearance: textfield;
  appearance: textfield;
  background: transparent;
  color: white;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  height: 100%;
  position: absolute;
  text-align: center;
  width: 100%;
  
  &:focus {
    outline: 0;
  }
`;

const Label = styled.span`
  color: var(--grey);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  transform: scaleX(95%);
`;

export default {
  Container,
  Inner,
  Input,
  Label,
  Modifier,
  Score,
};
