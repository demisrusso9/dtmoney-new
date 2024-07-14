import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 340px) {
    gap: 2rem;
    flex-direction: column;
  }
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  border-radius: 6px;
  padding: 0 1.25rem;
  font-weight: bold;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['white']};
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
  }
`
