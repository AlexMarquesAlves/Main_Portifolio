import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    > section {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4rem;
    }

    @media (max-width: 1000px) {
      gap: 2rem;
    }

    > button {
    background: ${theme.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;

    &:hover {
      background: ${darken(0.05, theme.primary)};
    }

    a {
      text-transform: uppercase;
      color: ${theme.white};
      font-size: 1.5rem;
      font-weight: 300;
    }

    @media (max-width:500px) {
      padding: 1rem;
      a {
        font-size: 1rem;
      }
    }
  `}
`;
