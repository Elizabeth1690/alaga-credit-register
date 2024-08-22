"use client";

import React from 'react';

interface InputFullAddressProps {
  address: string; // Añadido para recibir la dirección
  onAddressChange: (address: string) => void; // Añadido para manejar el cambio en la dirección
}

const InputFullAddress: React.FC<InputFullAddressProps> = ({ address, onAddressChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
        Dirección Completa
      </label>
      <input
        id="address"
        type="text"
        value={address} // Establecido como el valor del input
        onChange={(e) => onAddressChange(e.target.value)} // Actualiza el estado al cambiar
        placeholder="[Dirección]"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default InputFullAddress;
