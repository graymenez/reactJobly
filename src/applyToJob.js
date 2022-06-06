import JoblyApi from "./api";

const applyToJob = async (username, jobId) => {
  try {
    let res = await JoblyApi.apply(username, jobId);

    return JSON.stringify(res);
  } catch (e) {
    return e;
  }
};
export default applyToJob;
