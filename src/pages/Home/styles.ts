import styled from 'styled-components'

export const JobList = styled.div`
  margin-top: 20px;
`

export const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 20px;
`

export const JobFilters = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Filters = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

export const InputFilter = styled.input`
  width: 40%;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.neutral.light[3]};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.neutral.light[3]};
  @media (max-width: 768px) {
    width: 70%;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 30px;
    width: 30%;
  }
`

export const CheckboxText = styled.p`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.neutral.dark[3]};
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Button = styled.button`
  width: 80px;
  background-color: ${({ theme }) => theme.colors.feedback.info};
  border: none;
  height: 30px;
  cursor: pointer;
  color: white;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`
