import React, { useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMappedState, useDispatch } from "redux-react-hook";
import { AppState } from "./store";
import { increaseCounter } from "./store/feature1/actions";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const mapState = useCallback((state: AppState) => {
    console.log(state);
    return { test: state.feature1Reducer.data.counter };
  }, []);
  const state = useMappedState(mapState);

  const handleClick = () => {
    dispatch(increaseCounter());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {state.test}
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
};

export default App;
