import { FormikErrors } from "formik";
import { useEffect, useMemo, useState } from "react";
import { registerRestaurant, WorkingHours } from "../types/signup";
import { SharedTextInput } from "../shared/TextInput";
import PhoneNumberInput from "../shared/PhoneNumberInput";
import { MultipleSelect } from "../shared/MultipleSelect";
import { GoogleMapsModal } from "./GoogleMapsModal";
import { WorkingHoursModal } from "./WorkingHoursModal";
import { useTranslation } from "react-i18next";

type IProps = {
  values: registerRestaurant;
  setFieldValue: (
    key: string,
    value: string | Array<WorkingHours> | Array<string>
  ) => void;
  errors: FormikErrors<registerRestaurant>;
};

type FoodCategory = {
  id: number;
  imageUrl: string;
  inactive: boolean;
  name: string;
  nameAr: string;
  nameEn: string;
};

export const FirstSection = ({ values, setFieldValue, errors }: IProps) => {
  const { t } = useTranslation();
  const [data, setData] = useState<Array<FoodCategory>>();
  const getFoodCategories = async () => {
    const res = await fetch(
      "https://app-stg.shnp.me/api/meta/foodcategories",
      {}
    );
    setData(await res.json());
  };

  useEffect(() => {
    getFoodCategories();
  }, []);

  const foodData = useMemo(() => {
    return data?.map((i) => ({
      value: i.id.toString(),
      label: i.nameEn,
    }));
  }, [data]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-light">
        <div className="flex flex-col w-3/4 space-y-4">
          <SharedTextInput
            label={t("Restaurant Name in English")}
            value={values.englishName}
            error={errors.englishName}
            onChange={(e) => setFieldValue("englishName", e.target.value)}
            placeholder="Enter your restaurant's name in english"
            required
          />
          <SharedTextInput
            label={t("Email")}
            value={values.restEmail}
            error={errors.restEmail}
            onChange={(e) => setFieldValue("restEmail", e.target.value)}
            placeholder="Enter the email"
            required
          />
          <SharedTextInput
            type="password"
            label={t("Password")}
            value={values.password}
            error={errors.password}
            onChange={(e) => setFieldValue("password", e.target.value)}
            placeholder="Enter your password"
            required
          />

          <MultipleSelect
            label={t("Restaurant Type")}
            onChange={(value) => {
              setFieldValue("restType", value);
            }}
            options={foodData || []}
            value={values.restType}
          />
          <SharedTextInput
            label={t("Operation Representative Email")}
            value={values.opEmail}
            error={errors.opEmail}
            required
            onChange={(e) => setFieldValue("opEmail", e.target.value)}
            placeholder="Enter the restaurant rep. email address"
          />
          <SharedTextInput
            label={t("Operation Representative Full Name in english")}
            error={errors.opEnglishName}
            onChange={(e) => setFieldValue("opEnglishName", e.target.value)}
            required
            value={values.opEnglishName}
          />
          <PhoneNumberInput
            label={t("Management Phone Number")}
            onChange={(e) => setFieldValue("managementPhoneNumber", e)}
            error={errors.managementPhoneNumber}
            required
            value={values.managementPhoneNumber}
          />
          <SharedTextInput
            label={t("Main Branch Name En")}
            value={values.branchNameEn}
            error={errors.branchNameEn}
            onChange={(e) => setFieldValue("branchNameEn", e.target.value)}
            placeholder="Enter main branch name en"
            required
          />
          <SharedTextInput
            label={t("Branch Address Name")}
            value={values.branchAddress}
            onChange={(e) => setFieldValue("branchAddress", e.target.value)}
            placeholder="Enter branch address name"
          />
          <SharedTextInput
            label={t("Branch Building Number")}
            value={values.branchBuildingNumber}
            onChange={(e) =>
              setFieldValue("branchBuildingNumber", e.target.value)
            }
            placeholder="Enter branch building number"
          />
          <SharedTextInput
            label={t("Twitter Social Media Account")}
            value={values.twitter}
            onChange={(e) => setFieldValue("twitter", e.target.value)}
            placeholder="Enter your restaurant twitter page"
          />
          <GoogleMapsModal />
        </div>
        <div className="flex flex-col items-end">
          <div className="w-3/4 flex flex-col justify-end">
            <SharedTextInput
              label={t("Restaurant Name in Arabic")}
              value={values.arabicName}
              error={errors.arabicName}
              onChange={(e) => setFieldValue("arabicName", e.target.value)}
              placeholder="Enter your restaurant's name in arabic"
              required
            />
            <SharedTextInput
              label={t("Bank Account IBAN")}
              value={values.iban}
              error={errors.iban}
              onChange={(e) => setFieldValue("iban", e.target.value)}
              placeholder="Enter your bank account IBAN"
              required
            />
            <SharedTextInput
              type="password"
              label={t("Confirm Password")}
              value={values.confirmPassword}
              error={errors.confirmPassword}
              onChange={(e) => setFieldValue("confirmPassword", e.target.value)}
              placeholder="Confirm your password"
              required
            />
            <SharedTextInput
              label={t("Commercial Registration Number")}
              error={errors.commRegNumber}
              value={values.commRegNumber}
              onChange={(e) => setFieldValue("commRegNumber", e.target.value)}
              placeholder="Enter registration number consisting of 10 digits"
              required
            />
            <PhoneNumberInput
              label={t("Operation Representative Phone Number")}
              onChange={(e) => setFieldValue("opPhoneNumber", e)}
              error={errors.opPhoneNumber}
              value={values.opPhoneNumber}
              required
            />
            <SharedTextInput
              label={t("Operation Representative Full Name in Arabic")}
              value={values.opArabicName}
              onChange={(e) => setFieldValue("opArabicName", e.target.value)}
              placeholder="Enter the restaurant operation rep. full name in arabic"
              error={errors.opArabicName}
              required
            />
            <SharedTextInput
              label={t("Main Branch Name Ar")}
              error={errors.branchNameAr}
              value={values.branchNameAr}
              onChange={(e) => setFieldValue("branchNameAr", e.target.value)}
              placeholder="Enter main branch name ar"
              required
            />
            <SharedTextInput
              label={t("Branch District")}
              value={values.district}
              onChange={(e) => setFieldValue("district", e.target.value)}
              placeholder="Enter branch district"
            />
            <SharedTextInput
              label={t("Branch Street")}
              value={values.street}
              onChange={(e) => setFieldValue("street", e.target.value)}
              placeholder="Enter branch street"
            />
            <SharedTextInput
              label={t("Branch Address Description")}
              value={values.branchDescription}
              onChange={(e) =>
                setFieldValue("branchDescription", e.target.value)
              }
              placeholder="Enter branch address description"
            />
            <SharedTextInput
              label={t("Instagram Social Media Account")}
              value={values.instagram}
              onChange={(e) => setFieldValue("instagram", e.target.value)}
              placeholder="Enter your restaurant instagram page"
            />
            <WorkingHoursModal
              formikWorkingHours={values.workingHours}
              setFieldValue={setFieldValue}
              required
              error={errors.workingHours as string}
            />
          </div>
        </div>
      </div>
    </>
  );
};
