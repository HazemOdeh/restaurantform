import { FormikErrors } from "formik";
import { registerRestaurant } from "../types/signup";
import { SharedFileInput } from "../shared/FileInput";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

type IProps = {
  values: registerRestaurant;
  setFieldValue: (key: string, value: File) => void;
  errors: FormikErrors<registerRestaurant>;
  handleSubmit: () => void;
};
export const SecondSection = ({
  handleSubmit,
  values,
  errors,
  setFieldValue,
}: IProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-row mt-4 text-lg font-bold ">
        {" "}
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
          <image href="src\assets\two.svg" x="0" y="0" width="50" height="50" />
        </svg>
        <div>
          <span className="flex flex-col justify-center mt-3 ml-1 text-2xl">
            {t("Attach Required Documents")}
          </span>
          <div className="flex flex-row inde mt-6 -ml-8">
            <p className="text-sm text-gray-600 mb-6 font-medium">
              {t(
                "Fill out your personal information to create an account tied to a Restaurant and Continue"
              )}
            </p>
          </div>
        </div>
      </div>
      <SharedFileInput
        label={t(
          "Please download the contract and read it well, Then sign on it and upload the contract here"
        )}
        value={values.contract}
        error={errors.contract ?? ""}
        onFileChange={(file: File) => {
          setFieldValue("contract", file);
        }}
        required
      />
      <SharedFileInput
        label={t("Restaurant Image")}
        accept="image/*"
        onFileChange={(file: File) => {
          setFieldValue("restImage", file);
        }}
        value={values.restImage}
        error={errors.restImage ?? ""}
      />
      <SharedFileInput
        label={t("Commercial License Number")}
        value={values.commLicenseNumber}
        accept="image/*"
        error={errors.commLicenseNumber ?? ""}
        onFileChange={(file: File) => {
          setFieldValue("commLicenseNumber", file);
        }}
      />
      <SharedFileInput
        label={t("Tax Certificate Number")}
        value={values.taxCertificateNumber}
        accept="image/*"
        error={errors.taxCertificateNumber ?? ""}
        onFileChange={(file: File) => {
          setFieldValue("taxCertificateNumber", file);
        }}
      />
      <div className="flex flex-row justify-end">
        <button
          className="p-2 rounded-full text-white text-center text-md bg-[#fc4434] w-1/5 border border-transparent hover:text-[#fc4434] hover:bg-white hover:border-[#fc4434] cursor-pointer focus:outline-[#fc4434] focus:border-[#fc4434]"
          type="submit"
          onClick={handleSubmit}
        >
          {t("Create Account")}
        </button>
        <Link
          to="/login"
          className="p-2 rounded-full text-white text-center text-md bg-[#fc4434] w-1/5 border border-transparent hover:text-[#fc4434] hover:bg-white hover:border-[#fc4434] cursor-pointer focus:outline-[#fc4434] focus:border-[#fc4434]"
        >
          {t("Login Instead?")}
        </Link>
      </div>
    </div>
  );
};
