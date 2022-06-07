import JoblyApi from "./api";

/**  Gets the current user's username from local storage.
 * Username was set by either logging "Login.js" in or registering "Register.js" and searches db for user details by username.
 */

const username = localStorage.getItem("_currUsername");
const getUser = async () => {
  let res = await JoblyApi.getUser(username);
  return res;
};
export default getUser;
