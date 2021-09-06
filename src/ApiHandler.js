import Resas from "./.api_key.json";
import { useState, useEffect } from "react";

function ApiHandler(url = "", method = "GET") {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "X-API-KEY": Resas.apikey,
      },
    })
      .then((res) => res.json())
      .then((res_json) => {
        setdata(res_json);
      });
  }, [url]);

  return data;
}

export default ApiHandler;
