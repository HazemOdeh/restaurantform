export type WorkingHours = {
  day: string;
  from: string;
  to: string;
};
export interface registerRestaurant {
  englishName: string;
  arabicName: string;
  restEmail: string;
  restType: [];
  iban: string;
  password: string;
  confirmPassword: string;
  opEmail: string;
  opPhoneNumber: string;
  opEnglishName: string;
  opArabicName: string;
  managementPhoneNumber: string;
  branchAddress: string;
  branchNameAr: string;
  branchNameEn: string;
  branchBuildingNumber: string;
  twitter: string;
  commRegNumber: string;
  district: string;
  street: string;
  branchDescription: string;
  instagram: string;
  contract: File | null;
  restImage: File | null;
  commLicenseNumber: File | null;
  taxCertificateNumber: File | null;
  workingHours: WorkingHours[];
}
