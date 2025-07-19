import { useFormik } from "formik";
import { createAccountSchema } from "../schemas/signupSchema";
import { registerRestaurant } from "../types/signup";

export const useSignUp = () => {
  const { values, errors, setFieldValue, handleSubmit } = useFormik({
    validateOnChange: false,
    initialValues: {
      englishName: "",
      arabicName: "",
      restEmail: "",
      restType: [],
      iban: "",
      password: "",
      confirmPassword: "",
      opEmail: "",
      opPhoneNumber: "",
      opEnglishName: "",
      opArabicName: "",
      managementPhoneNumber: "",
      branchAddress: "",
      branchNameAr: "",
      branchNameEn: "",
      branchBuildingNumber: "",
      twitter: "",
      commRegNumber: "",
      district: "",
      street: "",
      branchDescription: "",
      instagram: "",
      contract: null,
      restImage: null,
      commLicenseNumber: null,
      taxCertificateNumber: null,
      workingHours: [],
    },
    validationSchema: createAccountSchema,
    onSubmit: (val: registerRestaurant) => {
      console.log(val);
    },
  });
  return {
    values,
    errors,
    setFieldValue,
    handleSubmit,
  };
};
