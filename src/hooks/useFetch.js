import { useState, useEffect } from 'react';

function useFetch(url = '') {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  if (isLoading) {
    return { isLoading, data: [], error: null };
  }

  if (error) {
    return { isLoading, data: [], error };
  }

  if (!data || !data.length) {
    return { isLoading, data: [], error: null };
  }

  return { isLoading, data, error: null };
}

export default useFetch;