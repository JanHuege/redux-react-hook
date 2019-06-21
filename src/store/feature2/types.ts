export interface Feature2 {
  counter2: number;
}

export enum Feature2ActionTypes {
  INCREATE_F2_COUNTER = "INCREATE_F2_COUNTER"
}

export interface Feature2State {
  readonly data: Feature2;
}
