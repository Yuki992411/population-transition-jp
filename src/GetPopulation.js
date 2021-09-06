import ApiHandler from "./ApiHandler";
import { useState, useEffect } from "react";

function GetPopulation(prefcode) {
  const [popudata, setpopudata] = useState({});

  const url_prefix =
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=";
  let url;

  // 2回以上のリクエスト発行を防いでいる
  if (prefcode === 0 || typeof popudata[prefcode] !== "undefined") {
    url = url_prefix + 0;
  } else {
    url = url_prefix + prefcode;
  }
  const res_data = ApiHandler(url);

  useEffect(() => {
    if (typeof res_data.result !== "undefined" && res_data.result !== null) {
      let update_population_data = { ...popudata };
      update_population_data[prefcode] = res_data.result.data[0].data;
      setpopudata(update_population_data);
    }
  }, [res_data]);

  return popudata;
}

export default GetPopulation;
