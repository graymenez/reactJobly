import JoblyApi from "./api";

const applyToJob = async (username, jobId) => {
  try {
    //Uses username and jobId to allow user to apply for a job. Stringfy data to allow for local storage.
    let res = await JoblyApi.apply(username, jobId);

    return JSON.stringify(res);
  } catch (e) {
    //Handles errors
    return e;
  }
};
export default applyToJob;
