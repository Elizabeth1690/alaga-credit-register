"use client";

import React from 'react';
import Select from 'react-select';
import flags from 'emoji-flags';


interface CountryOption{
    value: string;
    label: string;
    flags: string;
    }

    const option: CountryOption[] = [
    {value: 'us', label: 'Estados Unidos', flags: flags.countryCode('US').emoji},
    {value: 'gb', label: 'Reino Unido', flags: flags.countryCode('GB').emoji},
    {value: 'fr', label: 'Francia', flags: flags.countryCode('FR').emoji},
    {value: 'de', label: 'Alemania', flags: flags.countryCode('DE').emoji},
    {value: 'es', label: 'España', flags: flags.countryCode('ES').emoji},
    { value: 'co', label: 'Colombia', flags: flags.countryCode('CO').emoji },
    { value: 'cr', label: 'Costa Rica', flags: flags.countryCode('CR').emoji },
    ] 

    const SelectCountryOrigin: React.FC = () => {
        const handleChange = (selectedOption: any) => {
          console.log('Selected country:', selectedOption);
        };
      
        const CustomSingleValue = ({ data }: any) => (
          <div className="flex items-center">
            <span className="text-xl">{data.flag}</span>
            <span className="ml-2">{data.label}</span>
          </div>
        );
      
        return (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              País de origen
            </label>
            <Select
              options={option} 
              onChange={handleChange}
              getOptionLabel={(option: CountryOption) => `${option.flags} ${option.label}`}
              components={{ SingleValue: CustomSingleValue }} 
              className="basic-single"
              classNamePrefix="select"
            />
          </div>
        );
      };
      
      export default SelectCountryOrigin;