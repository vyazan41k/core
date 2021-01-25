import React from "react";
import Block from "./component/Block";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider>
        <Block />
      </Provider>
    </div>
  );
}

export default App;
