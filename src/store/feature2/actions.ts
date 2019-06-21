import { Feature2ActionTypes } from "./types";
import { action } from "typesafe-actions";

export const increateCounter = () =>
  action(Feature2ActionTypes.INCREATE_F2_COUNTER);
