import React from 'react';
import { Job } from '../types/types';
import Description from './description';
import Title from './Title';
import Tags from './tags';

type JobDescriptionProps = {
  job: Job;
};

const JobDescription = ({ job }: JobDescriptionProps) => {
  console.log("✅ JOB DATA:", job , "✅ JOB ID:", job.data.id);
  return (
    <div className="flex gap-3 pt-7 pl-4">
      {/* Left side */}
      <div className="flex-[4] flex flex-col gap-3">
        <div>
          <Title label="Description" />
          <Description desc={job.data.description} />
        </div>

        <div>
          <Title label="Responsibilities" />
          <p className="text-sm text-gray-600 whitespace-pre-line">
            {job.data.responsibilities || "No responsibilities listed"}
          </p>
        </div>

        <div>
          <Title label="Ideal Candidate we want" />
          <p className="text-sm text-gray-600">
            {job.data.idealCandidate }
          </p>
        </div>

        <div>
          <Title label="When & Where" />
          <p className="text-sm text-gray-600">{job.data.whenAndWhere}</p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-[2] flex flex-col gap-3">
        <div>
          <Title label="About" />
          <p className="text-sm text-gray-600 leading-6">
            <strong>Posted on:</strong> {new Date(job.data.datePosted).toLocaleDateString()}<br />
            <strong>Deadline:</strong> {new Date(job.data.deadline).toLocaleDateString()}<br />
            <strong>Location:</strong> {job.data.location?.join(', ') ?? "Not specified"}<br />
            <strong>Start:</strong> {new Date(job.data.startDate).toLocaleDateString()}<br />
            <strong>End:</strong> {new Date(job.data.endDate).toLocaleDateString()}
          </p>
        </div>

        <hr className="my-4 border-t border-gray-300" />

        <div>
          <Title label="Categories" />
          <div className="flex flex-wrap gap-1 text-sm">
            {job.data.categories?.length > 0 ? (
              job.data.categories.map((cat, i) => (
                <Tags key={i} label={cat} type="1" color={`${i + 1}`} />
              ))
            ) : (
              <p>No categories</p>
            )}
          </div>
        </div>

        <hr className="my-4 border-t border-gray-300" />

        <div>
          <Title label="Required Skills" />
          <ul className="list-disc pl-5 text-sm">
            {job.data.requiredSkills?.length > 0 ? (
              job.data.requiredSkills.map((skill, i) => <li key={i}>{skill}</li>)
            ) : (
              <li>No skills listed</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
