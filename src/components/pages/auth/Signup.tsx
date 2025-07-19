import { useTranslation } from "react-i18next";
import { useSignUp } from "../../hooks/useSignUp";
import { FirstSection } from "../FirstSection";
import { SecondSection } from "../SecondSection";
import { useState } from "react";

export const SignUp = () => {
  const { values, errors, setFieldValue, handleSubmit } = useSignUp();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  return (
    <>
      <div className="flex flex-col w-full h-full p-6">
        {" "}
        <div className="text-2xl font-bold flex flex-row justify-between mb-2">
          {" "}
          {i18n.t("Create a Restaurant Account")}
          <button
            onClick={() => {
              const newLang = language === "en" ? "ar" : "en";
              setLanguage(newLang);
              i18n.changeLanguage(newLang);
              document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
            }}
            className="text-base text-red-500 mr-2 cursor-pointer"
          >
            {language === "en" ? "العربية" : "EN"}
          </button>
        </div>
        <div className=" flex flex-row border-2 gap-3 border-gray-300 bg-white p-6 rounded-[18.46px] text-lg font-bold">
          {" "}
          <div className="text-lg font-bold mb-2 w-1/2 border-r-2 border-gray-200 p-2">
            <div className="flex flex-row mt-4 text-lg font-bold">
              {" "}
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                <image
                  href="src\assets\one.svg"
                  x="0"
                  y="0"
                  width="50"
                  height="50"
                />
              </svg>
              <div>
                <span className="flex flex-col justify-center mt-3 ml-1 text-2xl">
                  {i18n.t("Fill out Restaurant Registration Form")}
                </span>
                <div className="flex flex-row inde mt-6 -ml-8">
                  <p className="text-sm text-gray-600 mb-6 font-medium">
                    {i18n.t(
                      "Fill out your personal information to create an account tied to a Restaurant and Continue"
                    )}
                  </p>
                </div>
              </div>
            </div>
            <FirstSection
              values={values}
              errors={errors}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <SecondSection
              handleSubmit={handleSubmit}
              values={values}
              errors={errors}
              setFieldValue={setFieldValue}
            />
          </div>
        </div>
      </div>
    </>
  );
};
