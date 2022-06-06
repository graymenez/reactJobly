import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import JoblyApi from "./api";
import applyToJob from "./applyToJob";
import refresh from "./refresh";
import "./JobCard.css";
const JobCard = ({ job, currentUser }) => {
  const navigate = useNavigate();
  let parsedJobs = JSON.parse(localStorage.getItem("_jobsApplied"));
  const [isLoading, setIsLoading] = useState(true);
  const [jobsApplied, setJobsApplied] = useState(parsedJobs);
  const token = localStorage.getItem("_token");
  const username = localStorage.getItem("_currUsername");

  const apply = async (e) => {
    console.log(e.target);
    let res = await applyToJob(username, job.id);

    let userRes = await JoblyApi.getUser(username);
    let jobs = JSON.parse(res);
    let dataObj = {
      user: userRes,
      jobs,
    };
    localStorage.setItem("_jobsApplied", JSON.stringify(dataObj));
    e.target.id = "applied";
    e.target.disabled = true;
    e.target.innerText = "Applied! ✔️";
    e.target.style["cursor"] = "default";
  };
  useEffect(() => {
    //if job data is not yet retrieved display "Loading..." once job data is loaded display data

    if (Object.keys(job).length && Object.keys(job.company).length === 0) {
      setIsLoading(true);
    } else if (Object.keys(job).length && Object.keys(job.company).length > 0) {
      setIsLoading(false);
    }
  }, [job]);
  const checkIfAppliedToJob = (data1, data2) => {
    let jobsApplied = data1;
    let userApplications = data2;
    let results = userApplications.find((job) => job === jobsApplied);
    if (results) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  };

  //if token show user content else redirect to "/"
  return (
    <>
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : token ? (
        <div className="JobCard-loaded">
          <h1 className="JobCard-title">{job.company.name}</h1>
          <h1>{job.company.numEmployees}</h1>
          <h1 className="JobCard-job-title">{job.title}</h1>
          {job.salary ? (
            <p className="JobCard-salary">Salary : {job.salary}</p>
          ) : (
            <p className="JobCard-salary">Salary Not Specified</p>
          )}
          {jobsApplied &&
          job.id &&
          checkIfAppliedToJob(job.id, jobsApplied.user.applications) ? (
            <button id="applied" disabled>
              Applied! ✔️
            </button>
          ) : (
            <button
              style={{
                background: "none",
                border: "none",
                backgroundColor: "rgb(249, 254, 255)",
                boxShadow: "0px 1px 1px 0px grey",
                padding: "5px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={apply}
            >
              Apply 🗎
            </button>
          )}
          <button
            style={{
              background: "none",
              border: "none",
              backgroundColor: "#32CBF1",
              boxShadow: "0px 2px 2px 0px grey",
              padding: "5px",
              marginLeft: "10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => navigate(-1)}
          >
            Go Back ⮨
          </button>
        </div>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
export default JobCard;
