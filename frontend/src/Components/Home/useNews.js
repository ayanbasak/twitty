import React, { useEffect, useState } from "react";
import newsService from "../../Services/news.service";

export const useNews = ({limit, offset}) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadNews();
      }, []);

      const loadNews = async () => {
        // let params = new FormData();
        // params.append('limit',0);
        // params.append('offset',7);
        // console.log(" ---- loadNews ----" +params);
        setLoading(true);
        let { response, error } = await newsService.getNews(limit, offset);
        setLoading(false);
        // console.log("----- useNews loadNews response 200 ------");
        // console.log(response);
        setNews(response)
      };

    return [news, loading];
}
