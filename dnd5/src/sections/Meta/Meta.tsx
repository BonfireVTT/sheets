import React from 'react';

import S from './Meta.styles';

interface Props {
  children: JSX.Element;
}

const Meta: React.FC<Props> = ({ children }) => (
  <S.Container>
    { children }
  </S.Container>
);

export default Meta;
