import axios from "axios";

const token = localStorage.getItem('token');

const authAxios = axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${token}`
  }
});

  const train = data => {
    return authAxios.post("/MedicalData/train", data);
  };

  const result = data => {
    return authAxios.post("/MedicalData/result", data);
  };

// eslint-disable-next-line
export default {
  train,
  result
};