import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;

  border-radius: 6px;

  padding: 2.5rem 3rem;

  background-color: ${({ theme }) => theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;

      border: 0;
      border-radius: 6px;

      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['green-500']};

      margin-top: 1.5rem;

      font-weight: bold;
      padding: 0 1.25rem;

      cursor: pointer;

      transition: background-color 0.2s;

      &:not(:disabled):hover {
        background-color: ${({ theme }) => theme['green-700']};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;

  color: ${({ theme }) => theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;

  border: 0;
  border-radius: 6px;
  cursor: pointer;

  background: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};

  transition: background 0.2s;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${({ theme }) => theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
