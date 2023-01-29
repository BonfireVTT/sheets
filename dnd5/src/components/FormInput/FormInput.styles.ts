import { CompressedTextStyle } from '@shared/Text.styles';
import styled, { css } from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface Props {
  hasError: boolean;
}

const LabelErrorStyle = css`
  input, select, textarea {
    border-color: var(--error);
  }
`;

const Label = styled.label<Props>`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-sm);
  text-transform: uppercase;

  span {
    ${() => CompressedTextStyle};
  }

  input, select, textarea {
    background: var(--primary-dark);
    border: 2px solid var(--primary-dark);
    font-size: var(--font-size-md);
    margin-top: 0.1em;
    padding: 0.5em;

    &:disabled {
      opacity: 0.6;
    }
  }

  input, select {
    height: 40px;
  }

  ${({ hasError }) => hasError && LabelErrorStyle};
`;

const Error = styled.span`
  text-transform: capitalize;
`;

const Styles = {
  Container,
  Error,
  Label,
};

export default Styles;
