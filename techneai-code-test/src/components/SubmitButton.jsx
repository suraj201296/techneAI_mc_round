import React from 'react';

function SubmitButton() {
  return (
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  );
}

export default SubmitButton;
