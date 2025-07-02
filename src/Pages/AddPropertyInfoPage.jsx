import React, { useState, useMemo } from "react";
import { useFormContext } from "../context/FormContext.jsx";
import { toast } from "react-toastify";
import Header from "../components/Header.jsx";
import SectionRow from "../components/SectionRow.jsx";
import ModalManager from "../components/ModalManager.jsx";
import InfoDisplayBox from "../components/InfoDisplayBox.jsx";
import ImageUploader from "../components/ImageUploader.jsx";

const DataRenderer = ({ sectionId, data }) => {
  if (!data) return null;
  switch (sectionId) {
    case "propertyAddress":
      return (
        <>
          <strong>{data.propName}</strong>
          <br />
          {data.street}, {data.city}, {data.state} {data.zip}
        </>
      );
    case "leasingInfo":
      return (
        <>
          <strong>{data.managerName}</strong> ({data.managerEmail})<br />
          Phone: {data.managerPhone}
        </>
      );
    case "charges":
      if (data.notApplicable) return <span>Charges not applicable.</span>;
      return (
        <>
          Application Fee: <strong>${data.applicationFee}</strong>
          <br />
          Admin Fee: <strong>${data.adminFee}</strong>
        </>
      );
    case "rentFrequency":
      return (
        <>
          Rent Frequency: <strong>{data.frequency}</strong> | Due:{" "}
          {data.dueDate}
        </>
      );
    case "applicationAgreement":
      return (
        <>
          File: <strong>{data.agreementFile || "N/A"}</strong> | Accepts
          Immigrants: <strong>{data.acceptsImmigrants ? "Yes" : "No"}</strong>
        </>
      );
    case "aboutProperty":
      return <p className="text-gray-600 whitespace-pre-wrap">{data}</p>;
    case "amenities":
      if (!data || data.length === 0) return <span>No amenities added.</span>;
      return (
        <div className="flex flex-wrap gap-2">
          {data.map((item) => (
            <span
              key={item}
              className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      );
    case "petFees":
      return (
        <>
          Type: <strong>{data.petType}</strong> | Max Weight: {data.maxWeight}lb
          <br />
          One-time Fee: ${data.oneTimeFee} | Monthly: ${data.monthlyRent}
        </>
      );
    case "parking":
      return (
        <>
          Guest Parking: <strong>{data.parkingTime}</strong>
          <br />
          {data.overview}
        </>
      );
    case "education":
    case "stations":
    case "landmark":
      return (
        <>
          <strong>{data.name}</strong> ({data.type})<br />
          Distance: {data.distance} {data.unit}
        </>
      );
    case "utilities":
      return (
        <>
          <strong>{data.utilityType}</strong>: {data.companyName}
        </>
      );
    default:
      return (
        <pre className="text-xs whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      );
  }
};

const Section = ({ section, data, onOpenModal, onDeleteData }) => (
  <div className="py-4 border-b border-gray-200 last:border-b-0">
    <SectionRow
      title={section.title}
      isRequired={section.isRequired}
      label={section.label}
      hasData={!!data}
      onAdd={() => onOpenModal(section.id)}
      onEdit={() => onOpenModal(section.id)}
      onDelete={() => onDeleteData(section.id)}
    />
    {data && (
      <InfoDisplayBox
        onEdit={() => onOpenModal(section.id)}
        onDelete={() => onDeleteData(section.id)}
      >
        <DataRenderer sectionId={section.id} data={data} />
      </InfoDisplayBox>
    )}
  </div>
);

const AddPropertyInfoPage = () => {
  const { setStep, propertyData, setPropertyData } = useFormContext();
  const [activeModal, setActiveModal] = useState(null);

  const sections = [
    { id: "propertyAddress", title: "Property address", isRequired: true },
    { id: "leasingInfo", title: "Leasing info", isRequired: true },
    { id: "charges", title: "Charges", isRequired: true },
    {
      id: "rentFrequency",
      title: "Rent frequency & payment reminder",
      isRequired: true,
    },
    {
      id: "applicationAgreement",
      title: "Application agreement",
      isRequired: false,
      label: "(Optional)",
    },
    {
      id: "aboutProperty",
      title: "About the property",
      isRequired: false,
      label: "(Optional)",
    },
    {
      id: "amenities",
      title: "Community's amenity/features",
      isRequired: false,
      label: "(Optional but recommended)",
    },
  ];
  const sectionsCol2 = [
    {
      id: "petFees",
      title: "Pet fees",
      isRequired: false,
      label: "(Optional, add fees if you allow pet)",
    },
    { id: "parking", title: "Parking", isRequired: false, label: "(Optional)" },
    {
      id: "education",
      title: "Nearest educational institution",
      isRequired: false,
      label: "(optional but recommended)",
    },
    {
      id: "stations",
      title: "Nearest stations",
      isRequired: false,
      label: "(optional but recommended)",
    },
    {
      id: "landmark",
      title: "Nearest landmark",
      isRequired: false,
      label: "(optional but recommended)",
    },
    {
      id: "utilities",
      title: "Utilities provider",
      isRequired: false,
      label: "(optional but recommended)",
    },
  ];
  const allSections = [...sections, ...sectionsCol2];

  const progress = useMemo(() => {
    const filledSections = Object.keys(propertyData).filter(
      (key) => allSections.find((s) => s.id === key) && propertyData[key]
    );
    return (filledSections.length / allSections.length) * 100;
  }, [propertyData, allSections]);

  const handleNextStep = () => {
    const requiredSections = allSections.filter((s) => s.isRequired);
    const missingSections = requiredSections.filter((s) => !propertyData[s.id]);
    if (missingSections.length > 0) {
      toast.warn(
        `Please complete the following required sections: ${missingSections
          .map((s) => s.title)
          .join(", ")}`
      );
      return;
    }
    setStep(3);
  };

  const handleDeleteData = (sectionId) => {
    if (window.confirm("Are you sure?")) {
      setPropertyData((prev) => {
        const d = { ...prev };
        delete d[sectionId];
        return d;
      });
    }
  };

  const handleFileSelect = (section, file, index = -1) => {
    setPropertyData((prev) => {
      const d = { ...prev };
      if (section === "gallery_cover") {
        d.gallery = { ...d.gallery, cover: file };
      } else if (section === "gallery_more") {
        const m = [...(d.gallery?.more || Array(7).fill(null))];
        m[index] = file;
        d.gallery = { ...d.gallery, more: m };
      } else if (section === "video_tour") {
        d.videos = { ...d.videos, virtualTour: file };
      } else if (section === "video_arial") {
        d.videos = { ...d.videos, arialVideo: file };
      }
      return d;
    });
  };

  const handleFileRemove = (section, index = -1) => {
    setPropertyData((prev) => {
      const d = { ...prev };
      if (section === "gallery_cover") {
        d.gallery = { ...d.gallery, cover: null };
      } else if (section === "gallery_more") {
        const m = [...(d.gallery?.more || [])];
        m[index] = null;
        d.gallery = { ...d.gallery, more: m };
      } else if (section === "video_tour") {
        d.videos = { ...d.videos, virtualTour: null };
      } else if (section === "video_arial") {
        d.videos = { ...d.videos, arialVideo: null };
      }
      return d;
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header showExit={false} />
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3 flex justify-end">
          <button
            onClick={() => setStep(1)}
            className="text-gray-600 font-medium hover:text-gray-900 border border-gray-300 px-4 py-1.5 rounded-lg text-sm bg-white"
          >
            Save & Exit
          </button>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Condominiums information
        </h2>
        <div className="grid md:grid-cols-2 md:gap-x-12">
          <div>
            {sections.map((s) => (
              <Section
                key={s.id}
                section={s}
                data={propertyData[s.id]}
                onOpenModal={setActiveModal}
                onDeleteData={handleDeleteData}
              />
            ))}
          </div>
          <div>
            {sectionsCol2.map((s) => (
              <Section
                key={s.id}
                section={s}
                data={propertyData[s.id]}
                onOpenModal={setActiveModal}
                onDeleteData={handleDeleteData}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 p-6 rounded-lg border border-gray-200 bg-gray-50/50">
          <h3 className="font-bold text-gray-800">
            Property gallery (its not unit photo)*
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="col-span-1 row-span-2 h-56">
              <ImageUploader
                label="Upload cover photo"
                description="(.jpg, .png only)"
                file={propertyData.gallery?.cover}
                onFileSelect={(file) => handleFileSelect("gallery_cover", file)}
                onFileRemove={() => handleFileRemove("gallery_cover")}
              />
            </div>
            {(propertyData.gallery?.more || Array(7).fill(null)).map(
              (file, index) => (
                <div key={index} className="h-24">
                  <ImageUploader
                    file={file}
                    onFileSelect={(selectedFile) =>
                      handleFileSelect("gallery_more", selectedFile, index)
                    }
                    onFileRemove={() => handleFileRemove("gallery_more", index)}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="mt-10 p-6 rounded-lg border border-gray-200 bg-gray-50/50">
          <h3 className="font-bold text-gray-800">Videos (optional)</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <div className="h-28">
              <ImageUploader
                label="Property virtual tour"
                file={propertyData.videos?.virtualTour}
                onFileSelect={(file) => handleFileSelect("video_tour", file)}
                onFileRemove={() => handleFileRemove("video_tour")}
              />
            </div>
            <div className="h-28">
              <ImageUploader
                label="Property Arial video"
                file={propertyData.videos?.arialVideo}
                onFileSelect={(file) => handleFileSelect("video_arial", file)}
                onFileRemove={() => handleFileRemove("video_arial")}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t sticky bottom-0">
        <div className="w-full h-1 bg-gray-200">
          <div
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-4xl">
          <button
            onClick={() => setStep(1)}
            className="text-gray-600 font-medium hover:text-gray-900 text-sm"
          >
            Back
          </button>
          <button
            onClick={handleNextStep}
            className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm"
          >
            Next
          </button>
        </div>
      </footer>

      <ModalManager
        activeModal={activeModal}
        closeModal={() => setActiveModal(null)}
      />
    </div>
  );
};

export default AddPropertyInfoPage;
