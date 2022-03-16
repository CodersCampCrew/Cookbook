import axios from "axios";

const instance = axios.create({
  baseURL: 'https://cookbook-backend-coderscamp.herokuapp.com/api/',
  timeout: 10000,
});

export default instance;