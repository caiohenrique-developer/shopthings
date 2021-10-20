import { opacify } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;

  display: flex;
  justify-content: flex-end;

  height: 100vh;
  background: ${opacify(-0.5, '#000')};

  > div {
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    max-width: 25rem;
    padding: 1.563rem;
    background: var(--white_fff);
    box-shadow: 0 0 1rem rgb(255 255 255 / 10%);

    header {
      span,
      button {
        position: absolute;
      }

      span {
        top: 3.2rem;
        left: 3rem;
      }

      button {
        top: 2.125rem;
        left: -1.6rem;

        svg {
          width: 100%;
          min-width: 3rem;
          max-width: 3.25rem;
        }
      }
    }

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      h3 {
        font-size: 1.5rem;
        font-weight: var(--medium);
        font-family: var(--poppins);
        color: var(--purple_608);

        margin: 2rem auto 1rem;
      }
      p {
        font-size: 0.8rem;
        font-weight: var(--light);
        text-align: center;
      }
    }

    footer {
      width: 100%;

      button {
        color: var(--white_fff);
        font-weight: var(--bold);
        text-transform: uppercase;

        width: 100%;
        padding: 1rem 0;
        background: var(--purple_608);
      }
    }
  }
`;
