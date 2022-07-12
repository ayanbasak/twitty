import React, { useEffect, useState, useMemo } from "react";
import newsService from "../services/news.service";

export const useNews = ({limit, offset}) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const fetchNews = useMemo(async () => {
    setLoading(true);
    let { response, error } = await newsService.getNews(limit, offset);
    setLoading(false);
    setNews(response);
  }, [limit, offset])

  return [news, loading];
}
