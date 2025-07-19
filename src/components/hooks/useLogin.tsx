import { loginSchema } from "../schemas/loginSchema";
import { useFormik } from "formik";
import { loginRestaurant } from "../types/login";

export const useLogin = () => {
  const { values, errors, setFieldValue, handleSubmit } = useFormik({
    validateOnChange: false,
    initialValues: {
      loginEmail: "",
      loginPassword: "",
    },
    validationSchema: loginSchema,
    onSubmit: (val: loginRestaurant) => {
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
