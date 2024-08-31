import React, { useState } from 'react';

function RadioButtonGroup({ onOptionChange }) {
  const [selectedOption, setSelectedOption] = useState('flat-payout');

  const handleOptionChange = (e) => {
    const value = e.target.id;
    setSelectedOption(value);
    onOptionChange(value === 'flat-payout');
  };

  return (
    <div className="mb-4">
      <div className="flex items-center">
        <input
          id="flat-payout"
          name="payout"
          type="radio"
          checked={selectedOption === 'flat-payout'}
          onChange={handleOptionChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
        />
        <label htmlFor="flat-payout" className="ml-3 block text-sm text-gray-700">
          Set flat payout % for all sub-products
        </label>
      </div>
      <div className="flex items-center mt-2">
        <input
          id="sub-product-payout"
          name="payout"
          type="radio"
          checked={selectedOption === 'sub-product-payout'}
          onChange={handleOptionChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
        />
        <label htmlFor="sub-product-payout" className="ml-3 block text-sm text-gray-700">
          Set payout % per sub-product
        </label>
      </div>
    </div>
  );
}

export default RadioButtonGroup;
