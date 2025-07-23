export interface ideal_candidate {
    age : string;
    gender : string;
    traits : string[];
}
export interface about {
    posted_on : string;
    deadline : string;
    location : string;
    start_date : string;
    end_date : string;
    categories : string[];
    required_skills : string[];
    
}
export interface job {
    title :string;
    description :string;
    responsibilities :string[];
    ideal_candidate : ideal_candidate;
    when_where : string;
    about : about;
    company : string;
    image : string;
}