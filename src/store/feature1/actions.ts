import { Feature1ActionTypes } from "./types";
import { action } from "typesafe-actions";

export const increaseCounter = () =>
  action(Feature1ActionTypes.INCREATE_F1_COUNTER);
