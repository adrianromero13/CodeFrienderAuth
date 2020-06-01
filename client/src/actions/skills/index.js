import { STRENGTH, WEAKNESS } from '../types';
//these are our action creators are funcs that just returns an object
// the object that an action creators should MUST HAVE a type property

export const strength = () => {
  return {
    type: STRENGTH
  };
};

export const weakness = () => {
  return {
    type: WEAKNESS
  };
};
