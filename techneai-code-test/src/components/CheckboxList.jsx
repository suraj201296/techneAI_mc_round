import React, { useState, useEffect } from 'react';

function CheckboxList({ isFlatPayout }) {
  const initialItems = [
    { category_name: "Home Loan", id: 1, threshold: 10 },
    { category_name: "Loan Against property", id: 2, threshold: 10 },
    { category_name: "Personal Loan", id: 3, threshold: 10 },
    { category_name: "Business loan", id: 4, threshold: 10 },
    { category_name: "Life Insurance", id: 10, threshold: 10 },
    { category_name: "Health Insurance", id: 11, threshold: 10 },
    { category_name: "General Insurance", id: 12, threshold: 10 }
  ];

  const [flatPayout, setFlatPayout] = useState('');
  const [items, setItems] = useState(
    initialItems.map(item => ({ ...item, value: '', disabled: true }))
  );

  useEffect(() => {
    if (isFlatPayout) {
      setItems(items.map(item => ({ ...item, value: flatPayout, disabled: true })));
    }
  }, [flatPayout, isFlatPayout]);

  useEffect(() => {
    if (!isFlatPayout) {
      setItems(items.map(item => ({ ...item, value: '', disabled: true })));
    }
  }, [isFlatPayout]);

  const handleFlatPayoutChange = (e) => {
    const value = e.target.value;
    setFlatPayout(value);
  };

  const handleCheckboxChange = (id) => {
    let updatedItems;
    if (isFlatPayout) {
       updatedItems = items.map(item => 
        item.id === id ? { ...item, disabled: !item.disabled } : item
      );
    } else {
       updatedItems = items.map(item => 
        item.id === id ? { ...item, value: item.disabled ? item.threshold : '' ,disabled: !item.disabled } : item
      );
    }
    
    setItems(updatedItems);
    console.log(generateArrayOfObjects(updatedItems));
  };

  const handleItemValueChange = (id, newValue) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, value: newValue } : item
    );

    setItems(updatedItems);
    console.log(generateArrayOfObjects(updatedItems));
  };
  

  const generateArrayOfObjects = (itemsList) => {
    return itemsList
      .filter(item => !item.disabled)
      .map(item => ({
        sub_product_id: item.id,
        percentage: isFlatPayout ? parseInt(flatPayout) : parseInt(item.value)
      }));
  };

  return (
    <div className="mb-4">
      {isFlatPayout && (
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm font-medium text-gray-700 w-1/3">Enter Flat payout</label>
          <input
            type="number"
            className="block w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="%"
            value={flatPayout}
            onChange={handleFlatPayoutChange}
          />
        </div>
      )}

      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-700">Sub Product</label>
        <label className="text-sm font-medium text-gray-700">Payout %</label>
      </div>

      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          disabled
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label className="ml-2 text-sm text-gray-700">Select All</label>
      </div>

      {items.map((item) => (
        <div key={item.id} className="flex items-center mt-2">
          <input
            type="checkbox"
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            checked={!item.disabled}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <label className="ml-2 text-sm text-gray-700">{item.category_name}</label>
          <input
            type="number"
            className="mr-2 ml-auto block w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={item.value}
            disabled={isFlatPayout ? true : item.disabled}
            onChange={(e) => handleItemValueChange(item.id, e.target.value)}
          /> %
        </div>
      ))}
    </div>
  );
}

export default CheckboxList;
