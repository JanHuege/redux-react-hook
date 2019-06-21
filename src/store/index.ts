import { Feature2State } from "./feature2/types";
import { Feature1State } from "./feature1/types";
import { combineReducers } from "redux";
import { feature1Reducer } from "./feature1/reducer";
import { feature2Reducer } from "./feature2/reducer";

export interface AppState {
  feature1Reducer: Feature1State;
  feature2Reducer: Feature2State;
}

const reducers = combineReducers({ feature1Reducer, feature2Reducer });

export default reducers;
