import { opacify } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  padding: 0.8rem;
  border-radius: 8px;
  background: ${opacify(-0.9, '#6082C0')};
  transition: 0.4s;

  &:hover {
    background: ${opacify(-0.8, '#6082C0')};
  }

  svg {
    width: 1rem;
  }
`;
