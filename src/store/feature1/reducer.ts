import { Feature1State, Feature1ActionTypes } from "./types";
import { Reducer, Action } from "redux";
export const initialState: Feature1State = {
  data: {
    counter: 0
  }
};

const reducer: Reducer<Feature1State> = (
  state: Feature1State = initialState,
  action
) => {
  switch (action.type) {
    case Feature1ActionTypes.INCREATE_F1_COUNTER: {
      return { ...state, counter: state.data.counter++ };
    }
    default: {
      return state;
    }
  }
};

export { reducer as feature1Reducer };
