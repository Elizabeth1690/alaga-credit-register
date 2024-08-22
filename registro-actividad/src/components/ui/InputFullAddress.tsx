"use client";

import React from 'react';

const InputFullAddress: React.FC = () => {
  return (
    <div className="mb-4">
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
        Dirección Completa
      </label>
      <input
        id="address"
        type="text"
        placeholder="[Dirección]"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default InputFullAddress;
