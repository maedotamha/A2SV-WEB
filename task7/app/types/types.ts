export interface Job {
  data :{
  id: string;
  title: string;
  description: string;
  responsibilities: string;  // API gives a single string, not array
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgName: string;
  logoUrl: string;
  datePosted: string;
  status: string;
  }
}
