"use client";
import React, { useState } from 'react';
import SelectPersonalTelephone from '../components/ui/SelectPersonalTelephone'
import SelectCountryOrigin from '../components/ui/SelectCountryOrigin'
import SelectEconomicActivity from '../components/ui/SelectEconomicActivity'
import SelectEconomicActivities from '../components/ui/SelectEconomicActivities';
import InputFullAddress from '../components/ui/InputFullAddress';

interface OptionType {
  label: string;
  value: string;
}

interface OptionTypeActivity {
  label: string;
  value: string;
}

export default function EconomicActivityRegistration() {
  const [selectedActivity, setSelectedActivity] = useState<OptionTypeActivity| null>(null)
  const [selectedActivities, setSelectedActivities] = useState<OptionType[]>([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold mb-4">Registro Actividad Económica </h1>
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
        <InputFullAddress />
      <SelectCountryOrigin />
      </div>
    </main>
  );
}
