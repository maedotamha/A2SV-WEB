"use client";

import { useGetJobByIdQuery } from "@/app/Redux/service/data";
import JobDescription from "@/app/components/JobDescribtion";
import { notFound } from "next/navigation";
import React from "react";

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const { data: job, isLoading, error } = useGetJobByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error || !job ) return notFound();

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <JobDescription job={job} />
    </div>
  );
}
