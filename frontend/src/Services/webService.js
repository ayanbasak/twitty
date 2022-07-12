import axios from "axios";
import { getLocalData, setLocalData } from "../utils/storage/helper";

export default class WebService {
  static async post(action, params) {
    let response = null;
    let error = null;

    await axios
      .post(action, params)
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
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

    await axios
      .get(action, params)
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        if (err.response.status === 400) {
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
  async (error) => {
    const { response } = error;
    if (response.status === 401) {
      await refreshAccessToken(); 
      const originalRequest = error.config;
      let access_token = getLocalData('authentication').accessToken;
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return axios.create(originalRequest);
    } else if(response.status === 404){
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
      config.headers.common["Authorization"] = auth.accessToken ?  `Bearer ${auth.accessToken}` : '';
    }    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const refreshAccessToken = () => {
  let refresh_token = getLocalData('authentication').refreshToken;
  let header = {
    headers: {
        'Authorization': `Bearer ${refresh_token}`
    }
  };
  let access_token = axios.get(`${process.env.REACT_APP_BACKEND_DOMAIN}api/token/refresh`,header)
  .then(res => {
    let authentication = {
      isAuthenticated: true,
      accessToken: res.data.access_token,
      refreshToken: res.data.refresh_token
    };
    setLocalData("authentication", authentication);
    // return res.data.access_token;
  }).catch(err => {
    console.log(err)
  })

  
    // console.log("-------------vvv access_token--------"+access_token)
    // console.log(res.data)
} 