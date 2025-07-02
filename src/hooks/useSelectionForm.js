import { useFormContext } from '../context/FormContext.jsx';

const useSelectionForm = (formType) => {
  const { selectionData, setSelectionData } = useFormContext();
  const formData = selectionData[formType];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectionData(prev => ({
      ...prev,
      [formType]: { ...prev[formType], [name]: value },
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      setSelectionData(prev => ({
        ...prev,
        [formType]: { ...prev[formType], [name]: files[0] },
      }));
    }
  };

  return {
    formData,
    handleChange,
    handleFileChange,
  };
};

export default useSelectionForm;
