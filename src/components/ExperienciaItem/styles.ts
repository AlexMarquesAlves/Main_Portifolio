import styled, { css } from 'styled-components';

export const ItemContainer = styled.div`
  ${({ theme }) => css`
    > div {
      background: ${theme.gradient};
      padding: 1rem;
      padding-top: 2.5rem;
      height: 20rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      transition: 0.5s;

      h1 {
        color: ${theme.primary};
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }

      h2 {
        color: ${theme.primary};
        font-size: 1.5rem;
        font-weight: 300;
        margin-bottom: 1rem;
      }

      p {
        color: ${theme.textLight};
        font-size: 1rem;
        font-weight: 300;
      }
    }

    &:hover > div {
      filter: brightness(1.3);
      transform: translateY(-20px);
    }

    &:nth-child(even) > div {
      margin-top: 4rem;
    }

    @media (max-width: 1000px) {
      > div {
        height: 15rem;
        padding-top: 1.5rem;

        h1 {
          font-size: 1.2rem;
        }

        h2 {
          font-size: 1rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }

    @media (max-width: 700px) {
      &:nth-child(even) > div {
        margin-top: 0;
      }

      &:hover > div {
        transform: translateX(0);
      }

      > div {
        height: auto;
        padding: 2rem;

        h1 {
          font-size: 2rem;
        }

        h2 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1rem;
        }
      }
    }
  `}
`;
