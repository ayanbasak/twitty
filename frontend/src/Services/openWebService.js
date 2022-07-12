import axios from "axios";
const baseURL = process.env.REACT_APP_BACKEND_DOMAIN;

export default class openWebService {
  static async post(action, params = {}) {
    let response = null;
    let error = null;

    await axios
      .post(baseURL + action, params)
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        console.log(err)
        if (err.response.status === 400) {
          error = err.response.data;
        }
      });

    return { response, error };
  }
}

