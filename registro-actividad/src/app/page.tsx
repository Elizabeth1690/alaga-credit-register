"use client";

import React, { useState } from 'react';
import SelectPersonalTelephone from '../components/ui/SelectPersonalTelephone';
import SelectCountryOrigin from '../components/ui/SelectCountryOrigin';
import SelectEconomicActivity from '../components/ui/SelectEconomicActivity';
import SelectEconomicActivities from '../components/ui/SelectEconomicActivities';
import InputFullAddress from '../components/ui/InputFullAddress';

// Actualiza el tipo de la interfaz para el país
interface CountryOption {
  value: string;
  label: string;
  flags: string; // El emoji o la imagen de la bandera
}

interface OptionType {
  label: string;
  value: string;
}

interface OptionTypeActivity {
  label: string;
  value: string;
}

export default function EconomicActivityRegistration() {
  const [selectedActivity, setSelectedActivity] = useState<OptionTypeActivity | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<OptionType[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
  const [address, setAddress] = useState<string>('');

  const handleAddressChange = (address: string) => {
    setAddress(address);
  };

  const handleButtonClick = () => {
    console.log('Selected Activity:', selectedActivity);
    console.log('Selected Activities:', selectedActivities);
    console.log('Selected Country:', selectedCountry);
    console.log('Address:', address);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-4">Registro Actividad Económica</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <SelectEconomicActivity
          value={selectedActivity}
          onChange={setSelectedActivity}
        />
        <SelectPersonalTelephone />
        <SelectEconomicActivities
          value={selectedActivities}
          onChange={setSelectedActivities}
        />
        <InputFullAddress
          address={address}
          onAddressChange={handleAddressChange}
        />
        <SelectCountryOrigin
          value={selectedCountry}
          onChange={setSelectedCountry}
        />
      </div>
      <button
        onClick={handleButtonClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Mostrar Datos
      </button>
    </main>
  );
}
