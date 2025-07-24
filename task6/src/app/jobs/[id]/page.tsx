import jobData from '../../jobs.json'; 
import JobDescription from '../../components/JobDescribtion';
import { job } from '../../types/types';
import { notFound } from "next/navigation";

export default function JobDetailPage({ params : {id} }: { params: { id: string} }) {
  const jobs: job[] = jobData.job_postings;

  const selectedJob = jobs[parseInt(id)];

  if (!selectedJob) return notFound();

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <JobDescription job={selectedJob} />
    </div>
  );
}
