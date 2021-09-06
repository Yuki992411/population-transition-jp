import React, { useState } from "react";
import "./App.css";
import GetPrefecture from "./GetPrefecture";
import GetPopulation from "./GetPopulation";

function App() {
  const [checked_num, setchecked_num] = useState(0);
  const [check, setcheck] = useState([]);

  const pref_names = GetPrefecture().map((v) => {
    return (
      <p key={`pref_${v.prefCode}`}>
        <label htmlFor={v.prefCode}>
          <input
            type="checkbox"
            id={v.prefCode}
            onClick={() => {
              let update_check = { ...check };
              update_check[v.prefCode] = !update_check[v.prefCode];
              setchecked_num(v.prefCode);
              setcheck(update_check);
            }}
          />
          {v.prefName}
        </label>
      </p>
    );
  });

  const population_data = GetPopulation(check[checked_num] ? checked_num : 0);
  console.log(population_data);
  console.log(check);

  return (
    <div className="App">
      <h1>総人口推移グラフ</h1>
      <div>{pref_names}</div>
    </div>
  );
}

export default App;
