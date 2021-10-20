import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 0 2.75rem;
  align-items: center;
  grid-template-columns: auto 1fr;

  padding: 2rem 0;
  transition: 0.4s;

  &:hover {
    background: var(--white_fff);

    > div {
      &:first-of-type:after {
        content: none;
      }
      &:last-of-type button {
        color: var(--white_fff);
        background: var(--black_2c3);
        border-color: var(--black_2c3);
      }
    }
  }

  > div {
    &:first-of-type {
      background: var(--white_fff);

      &,
      > div {
        position: relative;
      }
      > div {
        z-index: 1;

        img {
          padding: 1.25rem !important;
        }
      }

      &:after {
        content: '';

        position: absolute;
        left: 50%;
        bottom: -1.25rem;
        z-index: -1;
        transform: translateX(-50%);

        display: block;
        width: 80%;
        height: 2rem;

        opacity: 0.6;
        filter: blur(20px);
        border-radius: 50%;
        background: var(--gray_727);
      }
    }
    &:last-of-type {
      max-width: 16.8rem;

      h2,
      span,
      button {
        font-weight: var(--bold);
      }

      span {
        color: var(--purple_608);
      }
      h2 {
        color: var(--black_2c3);
        margin: 0.625rem 0 1.25rem;
      }
      p {
        color: var(--gray_aca);
        max-height: 5rem;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 8px;
          height: 0;
        }

        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
        }

        &::-webkit-scrollbar-thumb {
          background: var(--purple_424);
          border-radius: 5px;
        }
      }
      button {
        width: 100%;

        font-size: 0.8rem;
        color: var(--purple_608);
        text-transform: uppercase;

        margin-top: 1.875rem;
        padding: 1rem 0.625rem;
        border: 1px solid var(--gray_aca);
      }
    }
  }
`;
