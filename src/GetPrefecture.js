import ApiHandler from "./ApiHandler";

function GetPrefecture() {
  const res_data = ApiHandler(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures"
  );

  const prefectures = res_data.result;

  if (prefectures != undefined) {
    return prefectures;
  } else return [];
}

export default GetPrefecture;
