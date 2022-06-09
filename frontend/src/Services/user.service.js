import axios from "axios";

const service = () => {
    const fetchUser = () => {
      return axios.request({
        method: "get",
        url: "https://my-json-server.typicode.com/atothey/demo/user"
      });
    };
  
    return {
      fetchUser,
    };
  }
  
  const userService = service();
  
  export default userService;