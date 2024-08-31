import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import RadioButtonGroup from './components/RadioButtonGroup';
import CheckboxList from './components/CheckboxList';
import SubmitButton from './components/SubmitButton';

function App() {
  const [isFlatPayout, setIsFlatPayout] = useState(true);

  const handleOptionChange = (isFlat) => {
    setIsFlatPayout(isFlat);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <Dropdown />
      <RadioButtonGroup onOptionChange={handleOptionChange} />
      <CheckboxList isFlatPayout={isFlatPayout} />
      <SubmitButton />
    </div>
  );
}

export default App;
