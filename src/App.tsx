import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { ProjectListScreen } from "./screens/project-list";
// import { Test } from "./Test";
//import { TsReactTest } from "./try-use-array";

import { LoginScreen } from "./screens/login";

function App() {
  return (
    <div className="App">
      <ProjectListScreen />
      {/*<Test></Test>*/}
      {/*<TsReactTest/>*/}
      <LoginScreen />
    </div>
  );
}

export default App;
