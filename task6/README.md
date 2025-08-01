# Job Listing App

A simple and responsive job listing application built with **Next.js** and **Tailwind CSS**. This app fetches job data from a local JSON file and displays it with clean UI components.

## Features

- Built with [Next.js](https://nextjs.org/)
- Styled using [Tailwind CSS](https://tailwindcss.com/)
- Loads job data from a local JSON file
- Dynamic routing for job detail pages
- Modular and clean component structure

2. Install dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Start the development server
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit http://localhost:3000 in your browser to view the application.
How It Works
Job data is read from the jobs.json file located in the data folder.

The home page uses getStaticProps to load all job posts.

Clicking a job takes the user to a detail page powered by dynamic routing (pages/jobs/[id].tsx).

Components are styled using Tailwind utility classes.