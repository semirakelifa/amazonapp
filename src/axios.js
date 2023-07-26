import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-react-clone-51612.cloudfunctions.net/api",
});

export default instance;
