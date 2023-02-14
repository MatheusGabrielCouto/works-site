import Header from 'components/Header'
import JobItem from 'components/Job'
import api from 'core/api'
import { useEffect, useState } from 'react'
import { Job } from 'utils/JobInterface'

import * as S from './styles'

export default function Home() {
  const [jobs, setJobs] = useState<[Job]>()
  const [jobsFiltered, setJobsFiltered] = useState<[Job]>()
  const [companyName, setCompanyName] = useState('')
  const [filterDays, setFilterDays] = useState<boolean>(false)

  useEffect(() => {
    getWorks()
  }, [])

  const getWorks = () => {
    const payload = {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: 'Business Analyst',
      locations: [],
      numJobs: 20,
      previousListingHashes: []
    }
    api
      .post('/jobs', payload)
      .then((resp) => {
        setJobs(resp.data.jobs)
        setJobsFiltered(resp.data.jobs)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const filterDate = (jobs: [Job]) => {
    if (filterDays) {
      const fil: [Job] = jobs?.filter(
        (job: Job) => Number(job.postedDate.replace(/\D/g, '')) <= 7
      )

      setJobsFiltered(fil)
    }
  }

  const applyFilters = async () => {
    const f: [Job] = jobs?.filter((job: Job) =>
      job.companyName.includes(companyName)
    )
    setJobsFiltered(f)

    if (filterDays) {
      filterDate(f)
    }
  }

  return (
    <>
      <Header />
      <S.Container>
        <S.JobFilters>
          <S.Filters>
            <S.InputFilter
              value={companyName}
              type="text"
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  applyFilters()
                }
              }}
              onChange={({ target }) => {
                setCompanyName(target.value)
              }}
              placeholder="Company name"
            />
            <S.CheckboxContainer>
              <input
                checked={filterDays}
                onChange={() => {
                  setFilterDays(!filterDays)
                }}
                type="checkbox"
              />
              <S.CheckboxText>Last 7 days</S.CheckboxText>
            </S.CheckboxContainer>
          </S.Filters>
          <S.Button onClick={applyFilters}>Apply</S.Button>
        </S.JobFilters>
        <S.JobList>
          {jobsFiltered?.map((job, index) => {
            if (index <= 9) {
              return <JobItem key={index} data={job} />
            }
          })}
        </S.JobList>
      </S.Container>
    </>
  )
}
