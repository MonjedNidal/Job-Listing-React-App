import JobCard from "./JobCard";
function Jobs({ filteredJobs }) {
  let jobsCardsArray = filteredJobs.map((job) => (
    <div key={job.id}>
      <JobCard job={job} />
    </div>
  ));
  return <div className="jopsContainer">{jobsCardsArray}</div>;
}

export default Jobs;
