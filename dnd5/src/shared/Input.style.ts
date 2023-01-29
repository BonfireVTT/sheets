/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Proficiency = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  border-radius: 0.2rem;
  border: 2px solid var(--accent-light);
  cursor: pointer;
  height: 14px;
  margin-left: 2px;
  transform: rotate(45deg);
  width: 14px;

  &:checked {
    &:before {
      background: var(--accent-light);
      border-radius: 0.1em;
      content: "";
      display: block;
      height: 6px;
      left: 2px;
      position: relative;
      top: 2px;
      width: 6px;
    }
  }
`;
