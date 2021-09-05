import React from "react";
import "./App.css";
import GetPrefecture from "./GetPrefecture";

function App() {
  const pref_names = GetPrefecture().map((v) => {
    return (
      <p key={`pref_${v.prefCode}`}>
        <label htmlFor={v.prefCode}>
          <input type="checkbox" id={v.prefCode} />
          {v.prefName}
        </label>
      </p>
    );
  });

  return (
    <div className="App">
      <h1>総人口推移グラフ</h1>
      <div>{pref_names}</div>
    </div>
  );
}

export default App;
