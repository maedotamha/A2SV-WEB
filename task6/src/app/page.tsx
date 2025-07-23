'use client'; 
import React from 'react';
import { useRouter } from 'next/navigation'; 
import jobData from './jobs.json'; 
import { job } from './types/types';
import JobCard from './components/jobCard';

export default function JobList() {
  const router = useRouter();
  const jobs: job[] = jobData.job_postings;

  const handleJobClick = (title: string) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/jobs/${slug}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {jobs.map((j, index) => (
        <JobCard key={index} job={j} onClick={() => handleJobClick(j.title)} />
      ))}
    </div>
  );
}
