import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCirclePlus } from "react-icons/fa6";

export const GoogleMapsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-row justify-between items-center space-x-3">
        <label className="text-lg font-medium">
          {t("Google Maps Location Link")}:
        </label>
        <FaCirclePlus
          onClick={() => setIsOpen(true)}
          size={34}
          color="red"
          cursor={"pointer"}
        />
      </div>

      {isOpen && (
        <div className="fixed z-1 inset-0 flex items-center justify-center ">
          <div className="bg-gray-300 p-6 rounded-lg shadow-lg ">
            <h2 className="text-xl font-semibold mb-4">
              {t("Enter Google Maps Link")}
            </h2>
            <iframe
              title="google maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216415.79021559487!2d35.85701818342446!3d32.05581132662474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1bcd7bee8f3%3A0x707603f03c3efede!2sBright%20Dentistry%20Amman%20-%20Dr%20Gadeer%20Mukatash!5e0!3m2!1sen!2sjo!4v1742379870096!5m2!1sen!2sjo"
              width="600"
              height="450"
            ></iframe>
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                {t("Close")}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                {t("Save")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
