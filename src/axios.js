import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-2c53e.cloudfunctions.net/api",
});

export default instance;
