import jobData from '../../jobs.json'; 
import JobDescription from '../../components/JobDescribtion';
import { job } from '../../types/types';

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  const jobs: job[] = jobData.job_postings;

  const selectedJob = jobs.find(
    (j) => j.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!selectedJob) return <p className="text-center mt-10">Job not found</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <JobDescription job={selectedJob} />
    </div>
  );
}
