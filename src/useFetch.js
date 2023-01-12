import { useState, useEffect } from 'react';
import axios from 'axios';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
// custom hook
const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState(null);

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data;

      if (data.Response === 'True') {
        setData(data.Search || data);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchMovies(`${API_ENDPOINT}${urlParams}`);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
