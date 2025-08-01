import React from 'react';
import { job } from '../types/types';
import Description from './description';
import Title from './Title';
import Tags from './tags';

type JobDescriptionProps = {
  job: job;
};

const JobDescription = ({ job }: JobDescriptionProps) => {
  return (
    <div className="flex gap-3 pt-7 pl-4">
      {/* Left side */}
      <div className="flex-[4] flex flex-col gap-3">
        <>
          <Title label="Description" />
          <Description desc={job.description} />
        </>
        <>
          <Title label="Responsibilities" />
          <ul className="list-disc pl-5 text-sm">
            {job.responsibilities?.map?.((r, i) => (
              <li key={i}>{r}</li>
            )) ?? <li>No responsibilities listed</li>}
          </ul>
        </>
        <>
          <Title label="Ideal Candidate we want" />
          <ul className="list-disc pl-5 text-sm">
            {job.ideal_candidate?.traits?.map((trait, i) => (
              <li key={i}>{trait}</li>
            )) ?? <li>No traits listed</li>}
          </ul>
        </>
        <>
          <Title label="When & Where" />
          <p className="text-sm text-gray-600">{job.when_where}</p>
        </>
      </div>

      
      <div className="flex-[2] flex flex-col gap-3">
        <>
          <Title label="About" />
          <p className="text-sm text-gray-600 leading-6">
            <strong>Posted on:</strong> {job.about.posted_on}<br />
            <strong>Deadline:</strong> {job.about.deadline}<br />
            <strong>Location:</strong> {job.about.location}<br />
            <strong>Start:</strong> {job.about.start_date}<br />
            <strong>End:</strong> {job.about.end_date}
          </p>
        </>
        <hr className="my-4 border-t border-gray-300" />
        <>
          <Title label="Categories" />
          <ul className="flex gap-1 text-sm">
            {job.about?.categories?.map((cat, i) => (
              <li key={i}>
                <Tags label={cat} type="1" color={`${i + 1}`} />
              </li>
            )) ?? <li>No categories</li>}
          </ul>
        </>
        <hr className="my-4 border-t border-gray-300" />
        <>
          <Title label="Required Skills" />
          <ul className="list-disc pl-5 text-sm">
              {job.about?.required_skills?.map((skill, i) => (
                <li key={i}>{skill}</li>
              )) ?? <li>No skills listed</li>}
            </ul>
        </>
      </div>
    </div>
  );
};

export default JobDescription;
