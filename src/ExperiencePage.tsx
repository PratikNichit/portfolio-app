import { ExperienceCard } from "./Components/ExperienceCard";
import { SubTitle } from "./Components/SubTitle";
import data from "./data.json";

interface Job {
  role: string;
  companyName: string;
  date: string;
  description: string;
}

export const ExperiencePage = () => {
  const jobs: Job[] = data.experiencePage.jobs;

  return (
    <div>
      <SubTitle
        title="Work Experience"
        description="Here you find out more about my work experiences"
      />
      <br />
      {jobs.map((job, index) => (
        <ExperienceCard
          key={index}
          role={job.role}
          companyName={job.companyName}
          date={job.date}
          discription={job.description}
        />
      ))}
    </div>
  );
};
