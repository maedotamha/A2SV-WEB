import React from 'react'
import jobData from './jobs.json'
import JobCard from './components/jobCard';

const Oportunity = () => {
const data = jobData.job_postings;
  return (
    <div className="max-w-4xl mx-auto mt-10">
        <div className="mx-auto pt-10 px-4">
        <div className="flex justify-between items-center ">
            <div>
                <h1 className="text-3xl font-extrabold font-">Opportunities</h1>
                <div className="text-gray-500 font-light text-sm "> Showing {data.length} results</div>
            </div>
            <div className='text-gray-500 font-light text-base items-center'>
                Sort by: 
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" className='text-gray-900'>
                    <option value="mostRelevant">Most Relevant</option>
                    <option value="leastRelevant">Least Relevant</option>
                </select>
            </div>
        </div>
    </div>
    <div className="max-w-4xl mx-auto ">
      {data.map((j, index) => (
        <JobCard key={index} job={j} index ={index} />
      ))}
    </div>

    </div>
  )
}

export default Oportunity