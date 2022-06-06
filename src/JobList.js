import React, { useEffect, useState } from "react";
import JoblyApi from "./api";
import "./JobList.css";

const JobList = ({ currentUser }) => {
  let parsedJobs = JSON.parse(localStorage.getItem("_jobsApplied"));
  let userD = JSON.parse(localStorage.getItem("_userD"));
  const [jobsApplied, setJobsApplied] = useState(
    parsedJobs ? parsedJobs : userD
  );
  console.log(userD);
  const [jobs, setJobs] = useState([{}]);
  useEffect(() => {
    const getJobs = async () => {
      let res = await JoblyApi.getAllJobs();
      setJobs(res);
    };
    getJobs();
  }, []);

  const checkIfAppliedToJob = (data1, data2 = userD.applications) => {
    let jobsApplied = data1;
    let userApplications = data2;
    let results = userApplications.find((job) => job === jobsApplied);
    if (results) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <h1 className="JobList-title">Job List</h1>
      <table className="JobList">
        <thead className="JobList-table-head">
          <tr>
            <th>Comany Name</th>
            <th>Job Title</th>
            <th>Salary</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody className="JobList-table-body">
          {jobs.map((job) => (
            <tr>
              <td>{job.companyName}</td>
              <td>{job.title}</td>
              {job.salary ? (
                <td>${job.salary}</td>
              ) : (
                <td>Salary Not Specified</td>
              )}

              <td className="JobList-table-body-link">
                <a href={`/jobs/${job.id}`}>View Job</a>
              </td>
              {!jobsApplied.user.applications ? (
                checkIfAppliedToJob(job.id, userD.applications) &&
                job.id &&
                currentUser.applications
              ) : checkIfAppliedToJob(job.id, jobsApplied.user.applications) &&
                job.id &&
                currentUser.applications ? (
                <td className="JobList-table-body-status-applied">
                  <p>Applied✔️</p>
                </td>
              ) : (
                <td className="JobList-table-body-status-not-applied">
                  <p>Not Applied</p>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default JobList;
