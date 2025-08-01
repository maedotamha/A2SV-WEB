import React from "react";
import { Job } from "../types/types";
import Avatar from "./avatar";
import JobHeader from "./JobHeader";
import JobFooter from "./JobFooter";
import Description from "./description";
import Link from "next/link";

type JobCardProp = {
  job: Job["data"];
};

const JobCard = ({ job }: JobCardProp) => {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div className="border border-gray-300 rounded-3xl p-5 my-3 h-[266px] flex hover:shadow-lg transition gap-5 cursor-pointer">
        <Avatar />
        <div className="flex flex-col justify-between w-full">
          <JobHeader title={job.title} whenWhere={job.whenAndWhere} />
          <Description desc={job.description} />
          <JobFooter catagory={job.categories || []} />
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
