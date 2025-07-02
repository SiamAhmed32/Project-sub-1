import { FormProvider, useFormContext } from "./context/FormContext.jsx";
import AddPropertyInfoPage from "./Pages/AddPropertyInfoPage.jsx";
import SelectRolePage from "./Pages/SelectRolePage.jsx";
import PlanSelectionPage from "./Pages/PlanSelectionPage.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContent = () => {
  const { step } = useFormContext();

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {step === 1 && <SelectRolePage />}
      {step === 2 && <AddPropertyInfoPage />}
      {step === 3 && <PlanSelectionPage />}
    </div>
  );
};

function App() {
  return (
    <FormProvider>
      <AppContent />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </FormProvider>
  );
}

export default App;
