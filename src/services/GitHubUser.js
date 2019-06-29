import axios from 'axios';

const baseUrl = "https://api.github.com/users"

const GitHubUser = {
  getByUsername(username) {
    return axios.get(`${baseUrl}/${username}`);
  },

  getReposByUsername(username) {
    return axios.get(`${baseUrl}/${username}/repos`);
  }
};

export default GitHubUser;