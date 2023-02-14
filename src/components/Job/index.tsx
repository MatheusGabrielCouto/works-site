import { Job } from 'utils/JobInterface'
import * as S from './styles'

interface IProps {
  data: Job
}

export default function JobItem({ data }: IProps) {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>{data.jobTitle}</S.Title>
        <S.Company>{data.companyName}</S.Company>
      </S.TitleContainer>
      <S.DescContainer>
        <S.Description
          dangerouslySetInnerHTML={{ __html: data.jobDescription }}
        />
      </S.DescContainer>
    </S.Container>
  )
}
