import axios from "axios";
// axios.defaults.baseURL = process.env.REACT_APP_ROUTER_BASE
const baseURL = process.env.REACT_APP_BACKEND_DOMAIN;

export default class openWebService {
  static async post(action, params = {}) {
    let response = null;
    let error = null;

    await axios
      .post(baseURL + action, params)
      .then((res) => {
        console.log(" ---- openWebService register ----");
        console.log(res);
        response = res.data;
      })
      .catch((err) => {
        console.log(err)
        // console.log(" ---- openWebService error response ----" + JSON.stringify(err));
        // console.log(" ---- openWebService error response ----" + JSON.stringify(err.response.data));
        if (err.response.status === 400) {
          error = err.response.data;
        }
      });

    return { response, error };
  }
}

/*
  static async put(action, params) {
    let response = await axios.put(action, params);
    return response.data;
  }

  static async get(action) {
    let response = await axios.get(action);
    return response.data;
  }

  static async delete(action) {
    let response = await axios.delete(action);
    return response.data;
  }

  static async patch(action, params) {
    let response = await axios.patch(action, params);
    return response.data;
  }
*/

// axios.interceptors.request.use(async (config) => {
//     config.baseURL = process.env.REACT_APP_ROUTER_BASE;
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

// axios.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     const { data } = error;
//     // const originalRequest = config;
//     console.log("---  400 error response  --- ")
//     console.log(data)

//     if (data.status === 401 || data.status === 404) {
//         return Promise.reject(error);
//     }
//     else {
//         return Promise.reject(error);
//     }
// });
