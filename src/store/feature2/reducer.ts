import { Feature2State, Feature2ActionTypes } from "./types";
import { Reducer } from "redux";
export const initialState: Feature2State = {
  data: {
    counter2: 0
  }
};

const reducer: Reducer<Feature2State> = (
  state: Feature2State = initialState,
  action
) => {
  switch (action.type) {
    case Feature2ActionTypes.INCREATE_F2_COUNTER: {
      return { ...state, counter: 2 };
    }
    default: {
      return state;
    }
  }
};

export { reducer as feature2Reducer };
