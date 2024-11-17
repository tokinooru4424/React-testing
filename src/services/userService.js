import axios from "./axiosCustomize";

const fetchAllUser = () => {
  return axios.get("/api/users?page=1");
};

export { fetchAllUser };
