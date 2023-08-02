export const addText = (text) => {
  return {
    type: 'ADD_TEXT',
    payload: text,
  };
};

export const clearHistory = () => {
  return {
    type: 'CLEAR_HISTORY',
  };
};

export const updateInput1 = (text) => {
  return {
    type: 'UPDATE_INPUT_1',
    payload: text,
  };
};

export const updateInput2 = (text) => {
  return {
    type: 'UPDATE_INPUT_2',
    payload: text,
  };
};

export const addValues = () => {
  return {
    type: 'ADD_VALUES',
  };
};
