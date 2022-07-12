import WebService from "./webService";

const service = () => {   
  const getNews = async (limit, offset) => {
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
