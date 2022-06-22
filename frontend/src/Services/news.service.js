import axios from "axios";
import { setLocalData } from "../util/helper";
import openWebService from "./openWebService";
import WebService from "./webService";
// import { useDispatch, useSelector } from "react-redux";

const service = () => {   
  const getNews = async (limit, offset) => {
    
    // console.log(" ---- service get ----" + data);
    // let params = new FormData();
    // params.append('limit',0);
    // params.append('offset',7);
    // console.log("--- service22 authorization ----- " + JSON.stringify(authorization));
    let { response, error } = await WebService.get("api/user/news/getall?limit="+limit+"&offset="+offset);

    let resp = response.map((res)=> {
      if(res.newsImg){
        res = {...res, "newsImg": process.env.REACT_APP_BACKEND_DOMAIN + res.newsImg}
      }
  
      if(res.userProfileImg){
        res = {...res, "userProfileImg": process.env.REACT_APP_BACKEND_DOMAIN + res.userProfileImg}
      }
      return res;
    })
    return { response:resp, error };
  };

  return { getNews };
};

const newsService = service();
export default newsService;
