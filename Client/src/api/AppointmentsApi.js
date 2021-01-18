import axios from "axios";

const token = localStorage.getItem('token');

const authAxios = axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer ${token}`
  }
});

const getAllAppointments = () => {
  return authAxios.get("/Appointments");
};

const createAppointment = data => {
    return authAxios.post("/Appointments", data);
  };

const getAppointment = id => {
  return authAxios.get(`/Appointments/${id}`);
};

const removeAppointment = id => {
  return authAxios.delete(`/Appointments/${id}`);
};

const updateAppointment = (id, data) => {
  return authAxios.post(`/Appointments/${id}`);
};

const getCurrentUserAppointments = () => {
  return authAxios.get("/Appointments/currentUser");
};

// eslint-disable-next-line
export default {
  getAllAppointments,
  createAppointment,
  getAppointment,
  removeAppointment,
  updateAppointment,
  getCurrentUserAppointments
};