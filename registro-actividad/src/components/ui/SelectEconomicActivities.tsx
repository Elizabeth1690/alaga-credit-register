"use client";

import React from 'react';
import Select from 'react-select';

interface OptionType {
  label: string;
  value: string;
}

interface SelectEconomicActivitiesProps {
  value: OptionType[];
  onChange: (selectedOptions: OptionType[]) => void;
}

const SelectEconomicActivities: React.FC<SelectEconomicActivitiesProps> = ({ value, onChange }) => {
  const options: OptionType[] = [
    { value: 'Hotelería', label: 'Hotelería' },
    { value: 'Restaurantes', label: 'Restaurantes' },
    { value: 'Tour Operador', label: 'Tour Operador' },
    { value: 'Trasporte', label: 'Trasporte' },
    { value: 'Consultoria', label: 'Consultoria' },
    { value: 'Educación', label: 'Educación' },
    { value: 'Salud', label: 'Salud' },
  ];

  return (
    <div className="mb-4">
      <label htmlFor="economic-activities" className="block text-sm font-medium text-gray-700">
        Actividades Económicas
      </label>
      <Select
        id="economic-activities"
        isMulti
        value={value}
        onChange={(selectedOptions) => onChange(selectedOptions as OptionType[])}
        options={options}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        classNamePrefix="select"
      />
    </div>
  );
};

export default SelectEconomicActivities;
