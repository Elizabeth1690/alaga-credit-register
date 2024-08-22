"use client";

import React from 'react';
import Select from 'react-select';

interface OptionType {
  label: string;
  value: string;
}

interface SelectEconomicActivityProps {
  value: OptionType | null;
  onChange: (selectedOption: OptionType | null) => void;
}

const SelectEconomicActivity: React.FC<SelectEconomicActivityProps> = ({ value, onChange }) => {
  const options: OptionType[] = [
    { value: 'Hotelería', label: 'Hotelería' },
    { value: 'Restaurantes', label: 'Restaurantes' },
    { value: 'Tour Operador', label: 'Tour Operador' },
    { value: 'Transporte', label: 'Transporte' },
    { value: 'Consultoria', label: 'Consultoria' },
    { value: 'Educación', label: 'Educación' },
    { value: 'Salud', label: 'Salud' },
  ];

  return (
    <div className="mb-4">
      <label htmlFor="economic-activity" className="block text-sm font-medium text-gray-700">
        Actividad Económica
      </label>
      <Select
        id="economic-activity"
        value={value}
        onChange={(selectedOption) => onChange(selectedOption)}
        options={options}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        classNamePrefix="select"
        menuPlacement="auto"
      />
    </div>
  );
};

export default SelectEconomicActivity;
