import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.neutral.light[3]};
  margin-bottom: 10px;
  box-shadow: 0 5px 5px ${({ theme }) => theme.colors.neutral.light[1]};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 5px 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const TitleContainer = styled.div`
  width: 30%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-bottom: 15px;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.dark[1]};
  font-weight: 600;
  font-size: 20px;
`

export const Company = styled.h3`
  color: ${({ theme }) => theme.colors.neutral.light[3]};
  font-weight: 500;
  font-size: 14px;
`

export const DescContainer = styled.div`
  display: flex;
  flex: 1;
  max-height: 150px;
  overflow: auto;
  padding: 0 5px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.neutral.light[1]};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.neutral.light[2]};
    border-radius: 5px;
  }
`

export const Description = styled.p``
