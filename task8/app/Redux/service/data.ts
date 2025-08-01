import { Job } from "@/app/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface JobsResponse {
  success: boolean;
  message: string;
  data: Job[];
}

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://akil-backend.onrender.com/",
  }),
  endpoints: (builder) => ({
    
    getAllJobs: builder.query<JobsResponse, void>({
      query: () => "opportunities/search",
    }),

   
    getJobById: builder.query<Job, string>({
      query: (id) => `opportunities/${id}`,
    }),
  }),
});


export const { useGetAllJobsQuery, useGetJobByIdQuery } = jobApi;
