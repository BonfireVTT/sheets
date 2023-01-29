import Tooltip from '@shared/Tooltip.styles';
import React from 'react';
import S from './Action.styles';

interface Props {
  accessibleLabel: string;
  action?: Function;
  children: React.ReactNode;
  icon?: string;
  visibleLabel: React.ReactNode;
}

const Action: React.FC<Props> = ({
  accessibleLabel, children, icon, visibleLabel, action,
}) => (
  <Tooltip content={visibleLabel} offset={[0, 2]}>
    <S.Container aria-label={accessibleLabel} tabIndex={0} onClick={() => action && action()}>
      { icon && <S.Icon alt="" src={`icons/${icon}`} /> }
      <span>{children}</span>
    </S.Container>
  </Tooltip>
);

export default Action;
