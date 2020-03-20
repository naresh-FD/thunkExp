export const AgeUpasync = val => {
  return {
    type: "AGE_UP",
    value: val
  };
};

export const AgeUp = val => {
  return dispatch => {
    setTimeout(() => dispatch(AgeUpasync(val)), 5000);
  };
};

export const AgeDown = val => {
  return {
    type: "AGE_DOWN",
    value: val
  };
};
