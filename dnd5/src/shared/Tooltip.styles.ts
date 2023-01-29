import Tippy from '@tippyjs/react';
import styled from 'styled-components';

const Tooltip = styled(Tippy)`
  background: var(--primary-dark);
  border-radius: 0.2em;
  border: 1px solid var(--primary);
  font-size: var(--font-size-sm);
  padding: 0.35em 0.5em;
`;

export default Tooltip;
