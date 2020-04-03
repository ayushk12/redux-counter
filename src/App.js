import React from "react";
import { createStore } from "redux";
import reducers from "./reducers";

let store = createStore(reducers);

class App extends React.Component {
  increment() {
    console.log("in store increment method");
    store.dispatch({ type: "add-one", data: "added-one" });
  }

  decrement() {
    console.log("in store decrement method");
    store.dispatch({ type: "sub-one", data: "subtracted-one" });
  }

  render() {
    return (
      <div>
        <h1>Simple Redux Counter:</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
