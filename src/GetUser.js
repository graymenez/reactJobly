import JoblyApi from "./api";

const username = localStorage.getItem("_currUsername");
const getUser = async () => {
  let res = await JoblyApi.getUser(username);
  return res;
};
export default getUser;
