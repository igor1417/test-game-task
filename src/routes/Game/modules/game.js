// ------------------------------------
// Constants
// ------------------------------------
export const CHECK_RESULT = 'CHECK_RESULT';
export const SET_NUMBER = 'SET_NUMBER';

// ------------------------------------
// Actions
// ------------------------------------
export function checkResult (winNumber) {
  return {
    type: CHECK_RESULT,
    winNumber: winNumber
  };
}

export function setNumber (number) {
  return {
    type: SET_NUMBER,
    number: number
  };
}

export const actions = {
  checkResult,
  setNumber
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHECK_RESULT]: (state, action) => {
    return {
      number: state.number,
      win: state.number === action.winNumber,
      tryNumber: state.tryNumber + 1
    };
  },
  [SET_NUMBER]: (state, action) => {
    return {
      number: action.number,
      win: state.win,
      tryNumber: state.tryNumber
    };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  number: null,
  win: null,
  tryNumber: 0
};
export default function gameReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
