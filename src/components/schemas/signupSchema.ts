import * as yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const createAccountSchema = yup.object().shape({
  englishName: yup.string().required("Please complete this field"),
  arabicName: yup.string().required("Please complete this field"),
  restEmail: yup
    .string()
    .email("Invalid Email")
    .required("Please complete this field"),
  iban: yup.string().required("Please complete this field"),
  password: yup
    .string()
    .min(8, "Password must be 8 characters long")
    .matches(
      passwordRegex,
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Please complete this field"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Please complete this field"),
  resType: yup.array().min(1, "At least one food category is required"),
  regNumber: yup.number().required("Please complete this field"),
  opEmail: yup
    .string()
    .email("Invalid Email")
    .required("Please complete this field"),
  opPhoneNumber: yup.number().required("Invalid Phone Number"),
  opEnglishName: yup.string().required("Please complete this field"),
  opArabicName: yup.string().required("Please complete this field"),
  managementPhoneNumber: yup.number().required("Invalid Phone Number"),
  branchNameAr: yup.string().required("Please complete this field"),
  branchNameEn: yup.string().required("Please complete this field"),
  branchAddress: yup.string(),
  branchBuildingNumber: yup.number(),
  twitter: yup.string(),
  commRegNumber: yup.number().required("Please complete this field"),
  district: yup.string(),
  street: yup.string(),
  branchDescription: yup.string(),
  instagram: yup.string(),
  contract: yup.mixed().required("Please complete this field"),
  /*contractPDF: yup
    .mixed()
    .required("File is required")
    .test("fileFormat", "Only PDF files are allowed", (value) => {
      return value instanceof File && value.type === "application/pdf";
    })
    .test("fileSize", "File too large (max 2MB)", (value) => {
      return value instanceof File && value.size <= 2 * 1024 * 1024; // 2MB
    }),*/
  restImage: yup.mixed().required("Please complete this field"),
  /*
  Yup validation for a single image
  image: Yup.mixed()
    .required("Image is required")
    .test("fileType", "Only image files are allowed", (file) =>
      file ? file.type.startsWith("image/") : false
    )
    .test("fileSize", "Image size too large (max 2MB)", (file) =>
      file ? file.size <= 2 * 1024 * 1024 : false
    ),
  */
  workingHours: yup.array().min(1, "At least you should fill 1 working detail"),
  commLicenseNumber: yup.mixed().required("Please complete this field"),
  taxCertificateNumber: yup.mixed().required("Please complete this field"),
});
