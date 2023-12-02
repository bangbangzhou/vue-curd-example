import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8899/api",
  headers: {
    "Content-type": "application/json"
  }
});