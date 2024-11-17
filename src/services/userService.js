import axios from "./axiosCustomize";

const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

export { fetchAllUser };
