import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";
const Job = ({ currentUser }) => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  useEffect(() => {
    //get job data by id via params and set results to job state
    const getJob = async () => {
      let res = await JoblyApi.getJob(id);
      setJob(res);
    };
    getJob();
  }, []);

  return (
    <>
      <JobCard job={job} currentUser={currentUser} />
    </>
  );
};
export default Job;
