import * as ActionTypes from './actiontypes.ts';

export const inc = () => {
  return { type: ActionTypes.INC };
};

export const dec = () => {
  return { type: ActionTypes.DEC };
};
