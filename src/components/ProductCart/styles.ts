import styled from 'styled-components';

export const Container = styled.div`
  gap: 0 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1fr;

  padding: 0.2rem;
  transition: 0.3s;

  &:hover {
    border-radius: 0.2rem;
    background: var(--white_fff);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  }

  > div {
    &:first-of-type {
      background: var(--white_fff);

      img {
        padding: 0.5rem !important;
      }
    }
    &:last-of-type {
      h2,
      span {
        font-weight: var(--bold);
      }

      span {
        color: var(--purple_608);
        font-family: var(--poppins);
      }
      h2 {
        font-size: 0.8rem;
        color: var(--black_2c3);
        margin: 0.625rem 0 1.25rem;
      }
    }
  }
`;
