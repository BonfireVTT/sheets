/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactModal from 'react-modal';

import S from './Modal.styles';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
}

ReactModal.setAppElement('#root');

const Modal: React.FC<Props> = ({ children, isOpen }) => (
  <ReactModal
    isOpen={isOpen}
    className="_"
    overlayClassName="_"
    contentElement={
      (props, child) => <S.Modal {...props}>{child}</S.Modal>
    }
    overlayElement={
      (props, contentElement) => <S.Overlay {...props}>{contentElement}</S.Overlay>
    }
  >
    {children}
  </ReactModal>
);

export default Modal;
