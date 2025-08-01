'use client';
import { useGetAllJobsQuery } from "./Redux/service/data";
import JobCard from "./components/jobCard";
import { Job } from "./types/types";

const Opportunity = () => {
  const { data, isLoading, error } = useGetAllJobsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading jobs.</p>;

  const jobs: Job['data'][] = data?.data ?? [];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="mx-auto pt-10 px-4">
         <div className="flex justify-between items-center ">
             <div>
                 <h1 className="text-3xl font-extrabold font-">Opportunities</h1>
             </div>
             <div className='text-gray-500 font-light text-base items-center'>
                 <div className="text-gray-500 font-light text-sm "> Showing  Showing {data?.data.length ?? 0}results</div>
                 Sort by: 
                 <label htmlFor="sort"></label>
                 <select name="sort" id="sort" className='text-gray-900'>
                     <option value="mostRelevant">Most Relevant</option>
                     <option value="leastRelevant">Least Relevant</option>
                 </select>
             </div>
         </div>
     </div>

      {jobs.map((j) => (
        <JobCard key={j.id} job={j}  />
      ))}
    </div>
  );
};
export default Opportunity