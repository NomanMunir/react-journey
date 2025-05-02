import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(
      responseData.message || "Something went wrong, failed to send request."
    );
  }
  return responseData;
}

export default function useHttp(url, config, initData) {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initData);

  function clearData() {
    setData(initData);
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || "Something went wrong.");
      }
      setIsLoading(false);
    },
    [url, config, sendHttpRequest]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config)
      sendRequest();
  }, [sendRequest, config]);

  return {
    data,
    error,
    isLoading,
    sendRequest,
    clearData,
  };
}
