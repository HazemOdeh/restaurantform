import * as yup from "yup";

export const loginSchema = yup.object().shape({
  loginEmail: yup
    .string()
    .email("Invalid Email")
    .required("Please complete this field"),
  loginPassword: yup.string().required("Please complete this field"),
});

export default loginSchema;
