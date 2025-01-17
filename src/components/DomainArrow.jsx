import React from 'react';

const DomainArrow = ({ direction, onClick }) => {
  return (
    <button
      className={`bg-green-600 text-white p-2 rounded-md transition duration-300 ease-in-out transform hover:bg-green-700 focus:outline-none`}
      onClick={onClick}
    >
      {direction === 'left' ? '◀' : '▶'}
    </button>
  );
};

export default DomainArrow;