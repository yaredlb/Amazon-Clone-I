import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
//   baseURL: "http://127.0.0.1:5001/clone-amzn-ylb/us-central1/api",
  // deployed version of firebase functions
  // baseURL: "https://api-n3iyvk2bva-uc.a.run.app"
  // deployed version of amazon server on renderMatches.com
  baseURL: "https://amazon-api-deploy-7ayi.onrender.com"
});

export { axiosInstance };
