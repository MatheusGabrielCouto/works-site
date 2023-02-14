import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.neutral.dark[1]};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.neutral.light[1]};
`
