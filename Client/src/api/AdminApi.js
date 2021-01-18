import axios from "axios";

const token = localStorage.getItem('token');

const authAxios = axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${token}`
  }
});


const getUsers = () => {
  return authAxios.get("/Admin/users");
};

const createUser = data => {
    return authAxios.post("/Admin/users", data);
};

const getUser = (id) => {
  return authAxios.get(`/Admin/users/${id}`);
};

const removeUser = id => {
  return authAxios.delete(`/Admin/users/${id}`);
};

const updateRole = (id, data) => {
  return authAxios.post(`/Admin/users/${id}/role`, data);
};

// eslint-disable-next-line
export default {
  getUsers,
  createUser,
  getUser,
  removeUser,
  updateRole
};