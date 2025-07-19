import { useState } from "react";
import { WorkingHours } from "../types/signup";
import { FaCirclePlus } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

type IProps = {
  formikWorkingHours: WorkingHours[];
  setFieldValue: (key: string, value: WorkingHours[]) => void;
  required: boolean;
  error: string;
};

export const WorkingHoursModal = ({
  setFieldValue,
  formikWorkingHours,
  error,
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [workingHoursList, setWorkingHoursList] =
    useState<WorkingHours[]>(formikWorkingHours);
  const [current, setCurrent] = useState<WorkingHours>({
    day: "",
    from: "",
    to: "",
  });
  const { t, i18n } = useTranslation();
  //const { i18n } = useTranslation();
  document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  const handleAdd = () => {
    const updatedList = [...workingHoursList, current];
    setWorkingHoursList(updatedList);
    setFieldValue("workingHours", updatedList);
    setCurrent({ day: "", from: "", to: "" });
    setIsOpen(false);
  };

  const handleDelete = (index: number) => {
    const updatedList = [...workingHoursList];
    updatedList.splice(index, 1);
    setWorkingHoursList(updatedList);
    setFieldValue("workingHours", updatedList);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <label className="text-lg font-medium">{t("Working Hours:")}</label>

        <div className="flex items-center">
          <FaCirclePlus
            onClick={() => setIsOpen(true)}
            size={34}
            color="red"
            cursor={"pointer"}
          />

          {error && <p className="text-red-500 text-sm">{t("error")}</p>}
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {workingHoursList.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p>
              <strong>{t("Day")}</strong> {item.day}
            </p>
            <p>
              <strong>{t("From")}</strong> {item.from}
            </p>
            <p>
              <strong>{t("To")}</strong> {item.to}
            </p>
            <div className="flex justify-end space-x-2 mt-2">
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl font-semibold text-red-500 mb-2">
              {t("Edit Working Hours")}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {t(
                "If your shift starts in the morning and ends after midnight, divide it into two shifts: First: Start at x:xx AM – End at 11:59 PM. Second: Start at 12:00 AM – End at x:xx AM."
              )}
            </p>

            <label htmlFor="day-select" className="text-gray-700 font-medium">
              {t("Day:")}
            </label>
            <select
              id="day-select"
              title={t("Select a day")}
              value={current.day}
              onChange={(e) => setCurrent({ ...current, day: e.target.value })}
              className="w-full border rounded-lg p-2 mb-3 bg-gray-100 text-gray-700"
            >
              <option value="">{t("Select a day")}</option>
              {[
                t("Sunday"),
                t("Monday"),
                t("Tuesday"),
                t("Wednesday"),
                t("Thursday"),
                t("Friday"),
                t("Saturday"),
              ].map((d, index) => (
                <option key={index} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <div className="flex justify-between mb-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  {t("From")}
                </label>
                <input
                  type="time"
                  value={current.from}
                  onChange={(e) =>
                    setCurrent({ ...current, from: e.target.value })
                  }
                  className="border rounded-lg p-2 w-32"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  {t("To")}
                </label>
                <input
                  type="time"
                  value={current.to}
                  onChange={(e) =>
                    setCurrent({ ...current, to: e.target.value })
                  }
                  className="border rounded-lg p-2 w-32"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setIsOpen(false)}
                className="w-1/2 border-2 border-red-500 text-red-500 font-semibold rounded-lg py-2 mr-2 hover:bg-red-100"
              >
                {t("Cancel")}
              </button>
              <button
                onClick={handleAdd}
                disabled={!current.day || !current.from || !current.to}
                className="w-1/2 bg-red-500 text-white font-semibold rounded-lg py-2 hover:bg-red-600 disabled:opacity-50"
              >
                {t("Add")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
