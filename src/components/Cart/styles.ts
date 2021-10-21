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

    gap: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    max-width: 25rem;
    background: var(--white_fff);
    box-shadow: 0 0 1rem rgb(255 255 255 / 10%);

    header {
      display: flex;
      align-items: center;

      width: 100%;
      padding: 1.563rem 1.563rem 0;

      button {
        margin: 0 1.5rem 0 -3.2rem;

        svg {
          width: 100%;
          min-width: 3rem;
          max-width: 3.25rem;
        }
      }
    }

    > div {
      gap: 0.5rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      overflow-y: auto;
      margin-right: 1rem;
      padding-left: 1.563rem;
      padding-right: 0.563rem;

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
      gap: 1rem;
      display: grid;

      width: 100%;
      padding: 0 1.563rem 1.563rem;

      div {
        gap: 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        span {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }

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
