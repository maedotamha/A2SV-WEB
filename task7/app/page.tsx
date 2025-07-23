import React from 'react'
import { useGetAllJobsQuery } from '../Redux/service/data';


const page = () => {
  const { data, error, isLoading } = useGetAllJobsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {data && data.map((job: any) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
     </div>
      ))}
    </div>
  )
}

export default page