import { useTranslation } from "react-i18next";

type IProps = {
  label: string;
  value: File | null;
  accept?: string;
  error: string;
  onFileChange: (file: File) => void;
  required?: boolean;
  className?: string;
};

export const SharedFileInput = ({
  label,
  value,
  onFileChange,
  className,
  error,
}: IProps) => {
  const { t } = useTranslation();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      onFileChange(file);
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <label className="flex flex-row text-sm font-medium text-gray-700">
        <p>{t(label)}</p>
      </label>

      <div className="w-full">
        <label
          htmlFor={`upload-${label}`}
          className="mt-2 flex justify-center items-center bg-white border border-dashed border-gray-400 p-6 rounded-lg cursor-pointer text-gray-500 text-sm w-full h-40"
        >
          <input
            type="file"
            className="hidden"
            id={`upload-${label}`}
            onChange={handleFileChange}
          />
          {value ? value.name : "+"}
        </label>
      </div>
      {value && (
        <p className="text-sm text-gray-600 mt-1">Selected: {value.name}</p>
      )}

      {error && <p className="text-red-500 text-xs mt-1">{t(error ?? "")}</p>}
    </div>
  );
};
