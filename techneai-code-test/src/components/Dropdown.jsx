import React from 'react';

function Dropdown() {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">Add Proposed Products & Payout</label>
      <select className="mt-2 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        <option>OneAndro Manager</option>
      </select>
    </div>
  );
}

export default Dropdown;
