import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addText, clearHistory, updateInput1, updateInput2, addValues } from './redux/Action';

const App = () => {
  const { text, sentenceHistory, inputValue1, inputValue2 } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange1 = (e) => {
    dispatch(updateInput1(e.target.value));
  };

  const handleChange2 = (e) => {
    dispatch(updateInput2(e.target.value));
  };

  const handleAddText = () => {
    dispatch(addText(text));
  };

  const handleAddValues = () => {
    dispatch(addValues());
  };

  const handleClearList = () => {
    dispatch(clearHistory());
  };

  return (
    <div>
      <h1>React-Redux Text App</h1>
      <input type="text" value={inputValue1} onChange={handleChange1} />
      <input type="text" value={inputValue2} onChange={handleChange2} />
      <button onClick={handleAddValues}>Add Values</button>
      <button onClick={handleAddText}>Add Text</button>
      <button onClick={handleClearList}>Clear List</button>
      <p>Text: {text}</p>
      <h2>Sentence History:</h2>
      {sentenceHistory.length > 0 ? (
        <ul>
          {sentenceHistory.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      ) : (
        <p>No sentences to display yet.</p>
      )}
    </div>
  );
};

export default App;
