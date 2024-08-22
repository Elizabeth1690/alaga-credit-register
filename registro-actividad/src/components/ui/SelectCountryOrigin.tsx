"use client";

import React from 'react';
import Select from 'react-select';
import flags from 'emoji-flags';

interface CountryOption {
  value: string;
  label: string;
  flags: string;
}

const option: CountryOption[] = [
  { value: 'us', label: 'Estados Unidos', flags: flags.countryCode('US').emoji },
  { value: 'gb', label: 'Reino Unido', flags: flags.countryCode('GB').emoji },
  { value: 'fr', label: 'Francia', flags: flags.countryCode('FR').emoji },
  { value: 'de', label: 'Alemania', flags: flags.countryCode('DE').emoji },
  { value: 'es', label: 'España', flags: flags.countryCode('ES').emoji },
  { value: 'co', label: 'Colombia', flags: flags.countryCode('CO').emoji },
  { value: 'cr', label: 'Costa Rica', flags: flags.countryCode('CR').emoji },
];

interface SelectCountryOriginProps {
  value: CountryOption | null;
  onChange: (selectedOption: CountryOption | null) => void;
}

const SelectCountryOrigin: React.FC<SelectCountryOriginProps> = ({ value, onChange }) => {
  const handleChange = (selectedOption: CountryOption | null) => {
    onChange(selectedOption);
  };

  const CustomSingleValue = ({ data }: { data: CountryOption }) => (
    <div className="flex items-center">
      <span className="text-xl mr-2">{data.flags}</span>
      <span>{data.label}</span>
    </div>
  );

  const CustomOption = ({ data, innerRef, innerProps }: any) => (
    <div ref={innerRef} {...innerProps} className="flex items-center p-2">
      <span className="text-xl mr-2">{data.flags}</span>
      <span>{data.label}</span>
    </div>
  );

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        País de origen
      </label>
      <Select
        options={option}
        value={value}
        onChange={handleChange}
        getOptionLabel={(option: CountryOption) => `${option.flags} ${option.label}`}
        getOptionValue={(option: CountryOption) => option.value}
        components={{ SingleValue: CustomSingleValue, Option: CustomOption }}
        className="basic-single"
        classNamePrefix="select"
      />
    </div>
  );
};

export default SelectCountryOrigin;
