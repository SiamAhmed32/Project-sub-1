import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [selectionData, setSelectionData] = useState({
    propertyType: "Condominiums",
    role: "Landlord",
  });
  const [propertyData, setPropertyData] = useState({});

  const value = {
    step,
    setStep,
    selectionData,
    setSelectionData,
    propertyData,
    setPropertyData,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
