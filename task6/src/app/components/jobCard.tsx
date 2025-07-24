import React from "react";
import { job } from "../types/types";
import Avatar from "./avatar";
import JobHeader from "./JobHeader";
import JobFooter from "./JobFooter";
import Description from "./description";
import Link from "next/link";

type JobCardProp = {
  job: job;
  index: number; 
};

const JobCard = ({ job , index}: JobCardProp) => {
  return (
    <Link href ={`jobs/${index}`} >
    <div className="border border-gray-300 rounded-3xl p-5 my-3 h-[266px] flex hover:shadow-lg transition gap-5 cursor-pointer">
      <Avatar />
      <div className="flex flex-col justify-between w-full">
        <JobHeader title={job.title} whenWhere={job.when_where} />
        <Description desc={job.description} />
        <JobFooter catagory={job.about.categories} />
      </div>
    </div>
    </Link>
  );
};

export default JobCard;
