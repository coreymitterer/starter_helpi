//import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { Survey } from "./components/Survey";
import { Pages } from "./components/Pages";
import { LQuestion } from "./components/Question";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
// let keyData = "";
// const saveKeyData = "MYKEY";
// const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
// if (prevKey !== null) {
//   keyData = JSON.parse(prevKey);
// }


//import "./App.css";
import { Pages } from "./components/Pages"
//import { useState } from "react";

function App() {

  return (
    <div className="App">

      <Survey></Survey>
      <LQuestion />

    </div>
  );
}

export default App;
