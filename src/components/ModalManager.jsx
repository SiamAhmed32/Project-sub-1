import React from "react";
import Modal from "./Modal.jsx";
import { useFormContext } from "../context/FormContext.jsx";

import PropertyAddressModal from "./PropertyAddressModal.jsx";
import LeasingInfoModal from "./LeasingInfoModal.jsx";
import ChargesModal from "./ChargesModal.jsx";
import RentFrequencyModal from "./RentFrequencyModal.jsx";
import ApplicationAgreementModal from "./ApplicationAgreementModal.jsx";
import AboutPropertyModal from "./AboutPropertyModal.jsx";
import AmenitiesModal from "./AmenitiesModal.jsx";
import PetFeesModal from "./property-info-modals/PetFeesModal.jsx";
import ParkingModal from "./property-info-modals/ParkingModal.jsx";
import NearestPlaceModal from "./property-info-modals/NearestPlaceModal.jsx";
import UtilitiesProviderModal from "./property-info-modals/UtilitiesProviderModal.jsx";

const ModalManager = ({ activeModal, closeModal }) => {
  const { propertyData, setPropertyData } = useFormContext();

  const handleSaveData = (sectionId, data) => {
    setPropertyData((prev) => ({ ...prev, [sectionId]: data }));
    closeModal();
  };

  const modalConfig = {
    propertyAddress: {
      title: "Property address",
      Component: PropertyAddressModal,
    },
    leasingInfo: { title: "Leasing info", Component: LeasingInfoModal },
    charges: { title: "Charges", Component: ChargesModal },
    rentFrequency: {
      title: "Rent frequency & payment reminder",
      Component: RentFrequencyModal,
    },
    applicationAgreement: {
      title: "Application agreement(optional)",
      Component: ApplicationAgreementModal,
    },
    aboutProperty: {
      title: "About the property(optional)",
      Component: AboutPropertyModal,
    },
    amenities: {
      title: "Community's amenity/features",
      Component: AmenitiesModal,
    },
    petFees: { title: "Pet fees", Component: PetFeesModal },
    parking: { title: "Parking", Component: ParkingModal },
    education: {
      title: "Nearest educational institution",
      Component: NearestPlaceModal,
      props: { placeType: "institution" },
    },
    stations: {
      title: "Nearest stations",
      Component: NearestPlaceModal,
      props: { placeType: "station" },
    },
    landmark: {
      title: "Nearest landmark",
      Component: NearestPlaceModal,
      props: { placeType: "landmark" },
    },
    utilities: {
      title: "Utilities provider",
      Component: UtilitiesProviderModal,
    },
  };

  const currentModal = activeModal ? modalConfig[activeModal] : null;

  if (!currentModal) {
    return null;
  }

  const { title, Component, props = {} } = currentModal;

  return (
    <Modal isOpen={!!activeModal} onClose={closeModal} title={title}>
      <Component
        data={propertyData[activeModal]}
        onSave={(data) => handleSaveData(activeModal, data)}
        onClose={closeModal}
        {...props}
      />
    </Modal>
  );
};

export default ModalManager;
