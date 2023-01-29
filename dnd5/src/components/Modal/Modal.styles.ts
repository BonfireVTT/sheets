import styled from 'styled-components';

const Modal = styled.div`
  background: var(--primary);
  border-radius: 0.25em;
  margin: 5em auto 0 auto;
  max-width: 400px;
  padding: 1em;
  width: 100%;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Title = styled.h2`
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  margin-bottom: 1em;
  text-transform: uppercase;
  transform: scaleX(90%);
  transform-origin: left;
`;

export default {
  Modal,
  Overlay,
  Title,
};
