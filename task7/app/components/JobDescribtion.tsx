import React from 'react';
import { Job } from '../types/types';
import Description from './description';
import Title from './Title';
import Tags from './tags';

type JobDescriptionProps = {
  job: Job;
};

const JobDescription = ({ job }: JobDescriptionProps) => {
  const jobData = job.data;

  const responsibilitiesList = jobData.responsibilities
    ? jobData.responsibilities.split('\n').filter(Boolean)
    : [];

  const idealCandidateTraits = jobData.idealCandidate
    ? jobData.idealCandidate.split('\n').filter(Boolean)
    : [];

  return (
    <div className="flex gap-3 pt-7 pl-4">
      {/* Left Side */}
      <div className="flex-[4] flex flex-col gap-3">
        <Title label="Description" />
        <Description desc={jobData.description} />

        <Title label="Responsibilities" />
        <ul className="text-sm ">
          {responsibilitiesList.length > 0
            ? responsibilitiesList.map((r, i) => (
                <li key={i}>
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 inline-block mr-2 text-green-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>{r}</li>
              ))
            : <li>No responsibilities listed</li>}
        </ul>

        <Title label="Ideal Candidate" />
        <ul className="pl-5 text-sm list-disc">
          {idealCandidateTraits.length > 0
            ? idealCandidateTraits.map((trait, i) => (
                <li key={i}>{trait}</li>
              ))
            : <li>No traits listed</li>}
        </ul>

        <Title label="When & Where" />
        <p className="text-sm text-gray-600">{jobData.whenAndWhere}</p>
      </div>

      {/* Right Side */}
      <div className="flex-[2] flex flex-col gap-3">
        
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="p-2 border border-gray-400 rounded-full inline-flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="text-gray-700 pl-2">
              Posted On:
              <div className="text-base font-normal text-gray-900 ">
                {jobData.datePosted}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div className="p-2 border border-gray-400 rounded-full inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
            </div>
            <div className="text-gray-700 pl-2">
              Deadline:
              <div className="text-base font-normal text-gray-900 ">{jobData.deadline}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div className="p-2 border border-gray-400 rounded-full inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <div className="text-gray-700 pl-2">
              Location:
              <div className="text-base font-normal text-gray-900 ">{jobData.location}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div className="p-2 border border-gray-400 rounded-full inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            <div className="text-gray-700 pl-2">
              Start Date:
              <div className="text-base font-normal text-gray-900 ">
                {jobData.startDate}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div className="p-2 border border-gray-400 rounded-full inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                />
              </svg>
            </div>
            <div className="text-gray-700 pl-2">
              End Date:
              <div className="text-base font-normal text-gray-900 ">{jobData.endDate}</div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-t border-gray-300" />

        <Title label="Categories" />
        <ul className="flex gap-2 text-sm flex-wrap">
          {jobData.categories.length > 0
            ? jobData.categories.map((cat, i) => (
                <Tags key={i} label={cat} type="1" color={`${i + 1}`} />
              ))
            : <li>No categories listed</li>}
        </ul>

        <hr className="my-4 border-t border-gray-300" />

        <Title label="Required Skills" />
        <ul className="flex gap-2 text-sm flex-wrap">
          {jobData.requiredSkills.length > 0
            ? jobData.requiredSkills.map((skill, i) => (
                <Tags key={i} label={skill} type="1" color="2" />
              ))
            : <li>No skills listed</li>}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
