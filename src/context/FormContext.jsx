import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

const initialState = {
  step: 1,
  selectionData: {
    propertyType: null,
    role: null,
    landlordData: { ownershipDoc: null },
    realtorData: { leniencyNumber: '', additionalDocs: null, agreement: null },
    companyData: {
      companyName: '', companyId: '', jobTitle: '', agreement: null,
      country: '', street: '', apt: '', phone: '', email: '', city: '',
      state: '', zip: ''
    },
    termsAccepted: false,
  },
  propertyData: {},
};

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(initialState.step);
  const [selectionData, setSelectionData] = useState(initialState.selectionData);
  const [propertyData, setPropertyData] = useState(initialState.propertyData);

  const resetForm = () => {
    setStep(initialState.step);
    setSelectionData(initialState.selectionData);
    setPropertyData(initialState.propertyData);
  };

  const value = {
    step, setStep,
    selectionData, setSelectionData,
    propertyData, setPropertyData,
    resetForm,
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
