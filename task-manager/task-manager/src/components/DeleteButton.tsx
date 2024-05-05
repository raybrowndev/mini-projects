import React from 'react';

function DeleteButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="m-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded"
    >
      {children}
    </button>
  );
}

export default DeleteButton;
