# Job Listing Application

This project is a job listing platform built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Redux Toolkit**. It allows users to view job opportunities, filter by categories and tags, and read detailed job information. All data is sourced from a local JSON file.

---

## Features

- Display list of jobs with position, company, and summary
- Filter jobs using category tags and skill tags
- View detailed job information (description, responsibilities, traits, requirements, etc.)
- Fetch data from a local file using RTK Query (Redux Toolkit)
- Fully responsive layout using Tailwind CSS
- Modular and scalable component-based structure

---

## Technologies Used

- **Next.js** – Server-side rendering & file-based routing
- **React** – UI rendering and hooks
- **TypeScript** – Type safety and better DX
- **Redux Toolkit** – State management and API layer with RTK Query
- **Tailwind CSS** – Utility-first CSS framework

---

## Project Structure

src/
├─ components/
│ ├─ JobCard.tsx // Summary card for job listings
│ ├─ JobDetails.tsx // Detailed view of a single job
│ └─ Tags.tsx // Reusable tag component
├─ redux/
│ ├─ service/data.ts // RTK Query setup for local data
│ └─ store.ts // Redux store setup
├─ types/
│ └─ job.ts // Job interface definition
├─ data/
│ └─ jobs.json // Local job data
└─ app/
├─ page.tsx // Main job listing page
└─ [id]/page.tsx // Dynamic route for individual job detail

yaml
Copy
Edit

---

## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

- Node.js (v16 or later)
- npm or yarn installed globally

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/maedotamha/job-listing-app.git
   cd job-listing-app
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn install
Run the development server:

bash
Copy
Edit
npm run dev
# or
yarn dev
Visit the app:
Open http://localhost:3000 in your browser.
![alt text](<public/Screenshot 2025-08-01 103619.png>)
![alt text](<public/Screenshot 2025-08-01 103637.png>)