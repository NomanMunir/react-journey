import { useEffect, useState } from "react";

export function useFetch(fetchFn, initValue) {
  const [data, setData] = useState(initValue);
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const response = await fetchFn();
        setData(response);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }
    fetchData();
  }, [fetchFn]);
  return {
    error,
    data,
    setData,
    isFetching,
  };
}
