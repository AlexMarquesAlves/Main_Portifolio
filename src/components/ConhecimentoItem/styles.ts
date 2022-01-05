import styled, { css } from 'styled-components';

export const ConhecimentoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    justify-content: center;

    p {
      color: ${theme.primary};
      font-weight: 300;
      font-size: 1.3rem;
      text-transform: uppercase;
    }

    svg {
      width: 6.5rem;
      height: 6.5rem;
      color: ${theme.secondary};
      transition: 0.3s;
    }

    &:hover {
      svg {
        color: ${theme.primary};
        transform: scale(0.95);
      }
    }

    @media (max-width: 1000px) {
      p {
        font-size: 1rem;
      }

      svg {
        width: 5rem;
        height: 5rem;
      }
    }
  `}
`;
