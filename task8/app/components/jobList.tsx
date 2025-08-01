// app/components/jobList.tsx
'use client';

import { useGetAllJobsQuery } from "../Redux/service/data";
import JobCard from "./jobCard";
import { Job } from "../types/types";

const JobList = () => {
  const { data, isLoading, error } = useGetAllJobsQuery();

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) return <p>Error loading jobs.</p>;

  const jobs: Job['data'][] = data?.data ?? [];

  return (
    <div className="space-y-4 pt-6">
      <p className="text-gray-500 text-sm">Showing {jobs.length} results</p>
      {jobs.map((j) => (
        <JobCard key={j.id} job={j} />
      ))}
    </div>
  );
};

export default JobList;
