import axios from "axios";

const API_URL = "/api/Users/";

export const login = async (login, password) => {
    const response = await axios
    .post(API_URL + "login", {
      login,
      password
    });

  let user = {}
  if (response.data) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('id', response.data.user.id);
    localStorage.setItem('login', response.data.user.login);
    localStorage.setItem('email', response.data.user.email);

    user = {
      "token": localStorage.getItem('token'),
      "id":localStorage.getItem('id'),
      "login":localStorage.getItem('login'),
      "email":localStorage.getItem('email')
    }
  }
  return user;
  }

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  localStorage.removeItem('login');
  localStorage.removeItem('email');
  localStorage.removeItem('products');
}

export const register = async (login, password, email) => {
  return await axios.post(API_URL + "register", {
    login,
    password,
    email
  });
}

export const whoAmI = () => {

  const user = {
    "token": localStorage.getItem('token'),
    "id":localStorage.getItem('id'),
    "login":localStorage.getItem('login'),
    "email":localStorage.getItem('email')
  }

  return user
}

export const interact = async (data) => {
  return await axios.post(API_URL + "interact", data);
}

export const recommend = async (id, data) => {
  return await axios.get(API_URL + `recommend/${id}`,data);
}

// eslint-disable-next-line
export default {
  login,
  logout,
  register,
  whoAmI,
  interact,
  recommend
};
