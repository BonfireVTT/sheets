import styled, { css } from 'styled-components';

const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  user-select: none;
`;

const Switch = styled.div`
  border-radius: 3em;
  border: 2px solid var(--accent-light);
  height: 28px;
  width: 45px;
  margin-right: 0.5em;
  padding: 2px;
`;

interface Props {
  isEditing: boolean;
}

const SwitchBallPlayModeStyle = css`
  transform: translateX(calc(100% - 3px));
`;

const SwitchBall = styled.div<Props>`
  background: var(--accent-light);
  border-radius: 100%;
  content: "";
  height: 20px;
  width: 20px;
  transition: transform 0.1s ease;
  transform: translateX(0%);

  ${({ isEditing }) => !isEditing && SwitchBallPlayModeStyle};
`;

const Label = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
`;

export default {
  Container,
  Label,
  Switch,
  SwitchBall,
};
