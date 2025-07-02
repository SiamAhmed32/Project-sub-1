// src/Pages/PlanSelectionPage.jsx
import React, { useState, useEffect } from 'react';
import { useFormContext } from '../context/FormContext.jsx';
import Header from '../components/Header.jsx';
import PlanCard from '../components/PlanCard.jsx';
import PaymentOption from '../components/PaymentOption.jsx';
import Modal from '../components/Modal.jsx';
import AddCardModal from '../components/AddCardModal.jsx';
import { toast } from 'react-toastify';

const plans = [
  { id: 1, name: 'Regular', price: 99.99, description: 'Price for 1-50 unit', minUnits: 1, maxUnits: 50 },
  { id: 2, name: 'Platinum', price: 129.99, description: 'Price for 51-100 unit', minUnits: 51, maxUnits: 100 },
  { id: 3, name: 'Enterprise', price: 199.99, description: 'Price for 101+ unit', minUnits: 101, maxUnits: Infinity },
];

const savedCards = [
  { id: 1, brand: 'Alex jones', last4: '8565' },
  { id: 2, brand: 'Alex jones', last4: '8565' },
];

const PlanSelectionPage = () => {
  // --- মূল সমাধানটি এখানে ---
  // Context থেকে এখন সরাসরি ডেটা এবং ফাংশন নেওয়া হচ্ছে
  const { propertyData, selectionData, setStep } = useFormContext();
  // --- সমাধান শেষ ---
  
  const totalUnit = parseInt(propertyData?.propertyAddress?.totalUnit, 10) || 0;

  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(1);
  const [selectedCardId, setSelectedCardId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const plan = plans.find(p => totalUnit >= p.minUnits && totalUnit <= p.maxUnits) || plans[0];
    if (plan) {
      setSelectedPlanId(plan.id);
    }
  }, [totalUnit]);

  const selectedPlan = plans.find(p => p.id === selectedPlanId);

  if (!selectedPlan) {
    return <div className="flex justify-center items-center min-h-screen"><p>Loading plans...</p></div>;
  }

  const totalCharge = isAnnual ? (selectedPlan.price * 12 * 0.85).toFixed(2) : selectedPlan.price.toFixed(2);

  const handleAddNewCard = (newCard) => {
    console.log("New Card Added:", newCard);
    setIsModalOpen(false);
  };

  const handleFinalSubmit = () => {
    const finalData = {
      ...selectionData,
      ...propertyData,
      paymentInfo: {
        plan: selectedPlan.name,
        billing: isAnnual ? 'Annually' : 'Monthly',
        card: savedCards.find(c => c.id === selectedCardId),
        totalCharge: parseFloat(totalCharge),
      }
    };
    console.log("--- FINAL SUBMISSION DATA ---");
    console.log(finalData);
    console.log("----------------------------");
    toast.success("Property added successfully! Check the console for all data.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose a plan for after 30-days free trial</h2>
        
        <div className="inline-flex bg-gray-200 p-1 rounded-full mb-8">
          <button onClick={() => setIsAnnual(false)} className={`px-4 py-1 rounded-full text-sm font-semibold ${!isAnnual ? 'bg-white shadow' : 'text-gray-600'}`}>Monthly</button>
          <button onClick={() => setIsAnnual(true)} className={`px-4 py-1 rounded-full text-sm font-semibold ${isAnnual ? 'bg-white shadow' : 'text-gray-600'}`}>Annually (save 57%)</button>
        </div>

        <p className="mb-4 text-sm text-center text-gray-600 bg-blue-50 p-2 rounded-md">
          Based on your <strong>{totalUnit} units</strong>, the <strong>{selectedPlan.name}</strong> plan is recommended for you.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <PlanCard key={plan.id} plan={{...plan, isAnnual}} isSelected={selectedPlanId === selectedPlanId} onSelect={setSelectedPlanId} />
          ))}
        </div>

        <div className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Payment option</h3>
            <button onClick={() => setIsModalOpen(true)} className="font-semibold text-blue-600 hover:underline">Add new card</button>
          </div>
          <div className="space-y-3">
            {savedCards.map(card => (
              <PaymentOption key={card.id} card={card} isSelected={selectedCardId === card.id} onSelect={setSelectedCardId} />
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t sticky bottom-0">
        <div className="w-full h-1 bg-gray-200"><div className="w-full h-full bg-blue-600"></div></div>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-4xl">
          <button onClick={() => setStep(2)} className="text-gray-600 font-medium hover:text-gray-900 text-sm">Exit</button>
          <div className="flex items-center gap-4">
            <p className="text-gray-700">Total with card charge: <span className="font-bold text-lg">${totalCharge}</span></p>
            <button onClick={handleFinalSubmit} className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm">
              Pay & add property
            </button>
          </div>
        </div>
      </footer>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add new card">
        <AddCardModal onClose={() => setIsModalOpen(false)} onSave={handleAddNewCard} />
      </Modal>
    </div>
  );
};

export default PlanSelectionPage;
