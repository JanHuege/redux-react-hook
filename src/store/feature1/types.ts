export interface Feature1 {
  counter: number;
}

export enum Feature1ActionTypes {
  INCREATE_F1_COUNTER = "INCREATE_F1_COUNTER"
}

export interface Feature1State {
  readonly data: Feature1;
}
