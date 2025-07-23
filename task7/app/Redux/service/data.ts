import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { get } from "http";


export const jobApi = createApi({
    reducerPath : "Jobs",
    baseQuery : fetchBaseQuery({baseUrl : "https://akil-backend.onrender.com/"}),
    endpoints : (builder) => ({
        getAllJobs : builder.query({
            query : () => '/opportunities/search'
        }),
        getJobById : builder.query({
            query : (id) => `/opportunities/${id}`
        }),
    })
})

export const { useGetAllJobsQuery } = jobApi