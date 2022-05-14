import { useEffect, useState } from "react";
// import { getMovies } from '../services/MovieServices';
import axios from "axios";

export default function useFetchMovies(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setMovies([]);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        page: pageNumber,
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: false,
        include_video: true,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log("res.data", res.data);
        setMovies((prevMovies) => {
          return [
              ...prevMovies,
              ...res.data.results,
          ];
        });
        setHasMore(res.data.results.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, movies, hasMore };
}
