import axios from "axios";
import { getLocalData } from "../util/helper";

export default class WebService {
  static async post(action, params) {
    let response = null;
    let error = null;

    await axios
      .post(action, params)
      .then((res) => {
        // console.log(" ---- openWebService register ----");
        // console.log(res);
        response = res.data;
      })
      .catch((err) => {
        console.log(" ---- openWebService error response ----" + JSON.stringify(err.response.data));
        if (err.response.status === 400) {
          error = err.response.data;
        }
      });

    return { response, error };
  }

  static async put(action, params) {
    let response = await axios.put(action, params);
    return response.data;
  }

  static async get(action, params = {}) {
    let response = null;
    let error = null;

    // console.log(" ---- WebService get action ----" + action);
    // console.log(" ---- WebService get 145 ----" + params.keys);

    await axios
      .get(action, params)
      .then((res) => {
        // console.log(" ---- openWebService register ----");
        // console.log(res);
        response = res.data;
      })
      .catch((err) => {
        if (err.response.status === 400) {
          // console.log(" ---- openWebService error response ----" + JSON.stringify(err.response));
          error = err.response.data;
        }
      });

    return { response, error };
  }

  static async delete(action) {
    let response = await axios.delete(action);
    return response.data;
  }

  static async patch(action, params) {
    let response = await axios.patch(action, params);
    return response.data;
  }
}

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    // const originalRequest = config;
    // console.log(">>>>>--- webservice error ------ ");
    // console.log(error);

    if (response.status === 401 || response.status === 404) {
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

axios.interceptors.request.use(
  async (config) => {    
    const auth = await getLocalData("authentication");
    if(auth){
      config.baseURL = process.env.REACT_APP_BACKEND_DOMAIN;
      let accessToken = "";
      if (auth.accessToken) {
        accessToken = "Bearer " + auth.accessToken;
      }
      // console.log(">>>>>--- accessToken ------ " + accessToken);
      config.headers.common["Authorization"] = accessToken;
    }
    
    // console.log(">>>>>--- config ------ ");
    // console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios.defaults.baseURL = process.env.REACT_APP_BACKEND_DOMAIN;
