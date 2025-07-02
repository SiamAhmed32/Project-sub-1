// src/Pages/SelectRolePage.jsx
import React from 'react';
// --- সকল পাথ এখানে ঠিক করা হয়েছে ---
import Header from '../components/Header.jsx';
import SelectionCard from '../components/SelectionCard.jsx';
import LandlordForm from '../components/LandlordForm.jsx';
import RealtorForm from '../components/RealtorForm.jsx';
import CompanyForm from '../components/CompanyForm.jsx';
import { useFormContext } from '../context/FormContext.jsx';

// React Icons
import { FiHome, FiBriefcase } from 'react-icons/fi';
import { BsBuildings } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';
import { MdOutlineRealEstateAgent, MdOutlineManageAccounts } from 'react-icons/md';

const SelectRolePage = () => {
  const { setStep, selectionData, setSelectionData } = useFormContext();

  const handleSelectionChange = (name, value) => {
    setSelectionData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Property type</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <SelectionCard
              title="Single House Property"
              icon={<FiHome />}
              description="Single unit house for single family"
              isSelected={selectionData.propertyType === 'Single House Property'}
              onClick={() => handleSelectionChange('propertyType', 'Single House Property')}
            />
            <SelectionCard
              title="Apartments complex"
              icon={<BsBuildings />}
              description="Multiple unit house for families"
              isSelected={selectionData.propertyType === 'Apartments complex'}
              onClick={() => handleSelectionChange('propertyType', 'Apartments complex')}
            />
            <SelectionCard
              title="Condominiums"
              icon={<FiBriefcase />}
              description="Multiple unit house for families"
              isSelected={selectionData.propertyType === 'Condominiums'}
              onClick={() => handleSelectionChange('propertyType', 'Condominiums')}
            />
          </div>
        </section>
        
        <section className="mt-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Select your role</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <SelectionCard
              title="Landlord"
              icon={<FaRegHandshake />}
              description="Owner of the property"
              isSelected={selectionData.role === 'Landlord'}
              onClick={() => handleSelectionChange('role', 'Landlord')}
            />
            <SelectionCard
              title="Realtor"
              icon={<MdOutlineRealEstateAgent />}
              description="Manage property on behalf on owner"
              isSelected={selectionData.role === 'Realtor'}
              onClick={() => handleSelectionChange('role', 'Realtor')}
            />
            <SelectionCard
              title="Property management company"
              icon={<MdOutlineManageAccounts />}
              description="For management company"
              isSelected={selectionData.role === 'Property management company'}
              onClick={() => handleSelectionChange('role', 'Property management company')}
            />
          </div>
        </section>

        <section className="mt-8">
          {selectionData.role === 'Landlord' && <LandlordForm />}
          {selectionData.role === 'Realtor' && <RealtorForm />}
          {selectionData.role === 'Property management company' && <CompanyForm />}
        </section>

        <div className="mt-8">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="text-gray-700">Accept RentYard property adding terms & condition</span>
          </label>
        </div>
      </main>
      <footer className="bg-white border-t sticky bottom-0">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-4xl">
          <button onClick={() => setStep(1)} className="text-gray-600 font-medium hover:text-gray-900 text-sm">Back</button>
          <button onClick={() => setStep(2)} className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm">
            Get started
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SelectRolePage;
