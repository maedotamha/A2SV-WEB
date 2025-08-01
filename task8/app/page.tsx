import Header from "./components/header";
import JobList from "./components/jobList"; 

const Opportunity = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      
      <div className="mx-auto pt-2 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Opportunities</h1>
        </div>
      </div>

      <JobList /> 
    </div>
  );
};

export default Opportunity;
