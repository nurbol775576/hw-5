const initialState = {
  text: '',
  sentenceHistory: [],
  inputValue1: '',
  inputValue2: '',
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      const newText = action.payload.trim();
      if (newText === '') {
        return state;
      }
      const newSentenceHistory = [newText, ...state.sentenceHistory].slice(0, 10);
      return { ...state, text: newText, sentenceHistory: newSentenceHistory };
    case 'UPDATE_INPUT_1':
      return { ...state, inputValue1: action.payload };
    case 'UPDATE_INPUT_2':
      return { ...state, inputValue2: action.payload };
    case 'ADD_VALUES':
      const concatenatedText = state.inputValue1 + ' ' + state.inputValue2;
      return { ...state, inputValue1: '', inputValue2: '', text: concatenatedText };
    case 'CLEAR_HISTORY':
      return { ...state, sentenceHistory: [] };
    default:
      return state;
  }
};

export default textReducer;
