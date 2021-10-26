import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  gap: 0 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1fr;

  padding: 0.2rem;
  transition: 0.3s;
  border: 1px solid transparent;

  &:hover {
    border-radius: 0.8rem;
    background: var(--white_fff);
    border-color: rgb(0 0 0 / 4%);
    box-shadow: 0 0.4rem 0.5rem rgb(0 0 0 / 8%);

    button {
      display: flex;
    }
  }

  > button {
    position: absolute;
    z-index: 1;
    top: 0.2rem;
    right: 0.2rem;

    display: none;
    align-items: center;
    justify-content: center;

    svg {
      min-width: 1.3rem;
      max-width: 1.25rem;
    }
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
        margin: 0.2rem 0 1.25rem;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        max-width: 8rem;
        height: 2.25rem;
        border-radius: 0.2rem;
        border: 1px solid rgb(0 0 0 / 9%);

        button {
          padding: 0.2rem 1rem;
        }

        button {
          font-size: 1.5rem;
        }
        input {
          opacity: 1;
          width: 100%;
          text-align: center;
          font-weight: var(--bold);
          background: transparent;

          &[type='number']::-webkit-inner-spin-button,
          &[type='number']::-webkit-outer-spin-button {
            margin: 0;
            padding: 0;
            -webkit-appearance: none;
          }
        }
      }
    }
  }
`;
