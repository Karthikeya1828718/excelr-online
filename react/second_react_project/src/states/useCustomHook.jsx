import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const useCustomHook = (url) => {
  let [data, setData] = useState([]);
  let [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [url]);

  return [data, error];
};

export default useCustomHook;
