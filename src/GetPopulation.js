import ApiHandler from "./ApiHandler";
import { useState, useEffect } from "react";

function GetPopulation(prefcode) {
  const [popudata, setpopudata] = useState({});

  const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefcode}`;
  const res_data = ApiHandler(url);

  useEffect(() => {
    if (
      res_data.result !== undefined &&
      res_data.result !== null &&
      prefcode > 0
    ) {
      let update_population_data = { ...popudata };
      update_population_data[prefcode] = res_data.result.data[0].data;
      setpopudata(update_population_data);
    }
  }, [res_data]);

  return popudata;
}

export default GetPopulation;
