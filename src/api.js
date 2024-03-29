import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const currUserToken = localStorage.getItem("_token");

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url =
      BASE_URL === process.env.REACT_APP_BASE_URL
        ? `${BASE_URL}${endpoint}`
        : `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  /** Get all companies. */

  static async getAllCompanies() {
    let res = await this.request(`companies/`);
    let companies = res.companies;
    return companies;
  }
  /** Get all jobs. */

  static async getAllJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }
  /** Get details on a job by id. */

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job;
  }
  /** Get details on a user by username */

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async editUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res;
  }

  static async apply(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "POST");
    return res;
  }
}

/** Sets the JoblyApi token to the current user's token. */
JoblyApi.token = currUserToken;

export default JoblyApi;
