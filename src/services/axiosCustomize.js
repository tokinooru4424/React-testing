import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in",
});

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let res = {};
    if (error.response) {
      //Request made and sever responded
      res.data = error.response.data;
      res.status = error.response.status;
      res.status = error.response.headers;
    } else if (error.resquest) {
      //The request was made but no response was received
      console.log(error.resquest);
    } else {
      //Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    return res;
  }
);

export default instance;
