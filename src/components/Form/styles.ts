import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  ${({ theme }) => css`
    margin-top: 8rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    > button {
      border: none;
      padding: 1rem 2.5rem;
      color: ${theme.white};
      font-weight: 300;
      font-size: 1.2rem;
      border-radius: 0.5rem;
      background: ${theme.primary};
      transition: 0.5s;
      width: fit-content;

      &:disabled {
        opacity: 0.5s;
      }

      &:not(:disabled):hover {
        background: ${darken(0.5, theme.primary)};
      }
    }

    @media (max-width: 700px) {
      margin-top: 5rem;
      grid-template-columns: 1fr;
    }

    @media (max-width: 450px) {
      > button {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
      }
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    height: 3rem;
    width: 100%;
    background: ${theme.inputBackground};
    border: 1px solid ${theme.border};
    padding: 1.7rem 1.5rem;
    color: ${theme.primary};
    border-radius: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    transition: 0.5s;

    &:focus {
      border-color: ${theme.primary};
    }

    &::placeholder {
      color: ${theme.primary};
    }

    @media (max-width: 450px) {
      padding: 1.4rem;
      font-size: 1rem;
    }
  `}
`;

export const TextArea = styled.input`
  ${({ theme }) => css`
    height: 10rem;
    width: 100%;
    background: ${theme.inputBackground};
    border: 1px solid ${theme.border};
    padding: 1.7rem 1.5rem;
    color: ${theme.primary};
    border-radius: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    transition: 0.5s;
    resize: none;

    grid-column: 1/3;

    &:focus {
      border-color: ${theme.primary};
    }

    &::placeholder {
      color: ${theme.primary};
    }

    @media (max-width: 700px) {
      grid-column: 1;
    }

    @media (max-width: 450px) {
      padding: 1.4rem;
      font-size: 1rem;
    }
  `}
`;
