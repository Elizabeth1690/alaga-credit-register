"use client"; // Asegura que este componente se ejecute en el cliente

import React from 'react';
import Select from 'react-select';
import flags from 'emoji-flags';

interface PhoneOption {
  value: string;
  flag: string;
  phoneCode: string;
}

const options: PhoneOption[] = [
  { value: 'us', flag: flags.countryCode('US').emoji, phoneCode: '(+1) 0000 - 0000' },
  { value: 'gb', flag: flags.countryCode('GB').emoji, phoneCode: '(+44) 0000 - 0000' },
  { value: 'fr', flag: flags.countryCode('FR').emoji, phoneCode: '(+33) 0000 - 0000' },
  { value: 'de', flag: flags.countryCode('DE').emoji, phoneCode: '(+49) 0000 - 0000' },
  { value: 'es', flag: flags.countryCode('ES').emoji, phoneCode: '(+34) 0000 - 0000' },
  { value: 'co', flag: flags.countryCode('CO').emoji, phoneCode: '(+57) 0000 - 0000' },
  { value: 'cr', flag: flags.countryCode('CR').emoji, phoneCode: '(+506) 0000 - 0000' }
];

const SelectPersonalTelephone: React.FC = () => {
  const handleChange = (selectedOption: PhoneOption | null) => {
    if (selectedOption) {
      console.log('Selected country:', selectedOption);
    } else {
      console.log('No country selected');
    }
  };

  const CustomSingleValue = ({ data }: { data: PhoneOption }) => (
    <div className="flex items-center">
      <span className="text-xl mr-2">{data.flag}</span>
      <span>{data.phoneCode}</span>
    </div>
  );

  const CustomOption = ({ data, innerRef, innerProps }: any) => (
    <div ref={innerRef} {...innerProps} className="flex items-center p-2">
      <span className="text-xl mr-2">{data.flag}</span>
      <span>{data.phoneCode}</span>
    </div>
  );

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
       Teléfono personal
      </label>
      <Select
        options={options}
        onChange={handleChange}
        getOptionLabel={(option: PhoneOption) => `${option.flag} ${option.phoneCode}`}
        getOptionValue={(option: PhoneOption) => option.value}
        components={{ SingleValue: CustomSingleValue, Option: CustomOption }}
        className="basic-single"
        classNamePrefix="select"
      />
    </div>
  );
};

export default SelectPersonalTelephone;
