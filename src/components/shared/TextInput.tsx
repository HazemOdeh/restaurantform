import { useTranslation } from "react-i18next";

//interface
type IProps = {
  label?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
};

export const SharedTextInput = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  disabled,
  className,
  error,
}: IProps) => {
  const { t } = useTranslation();
  return (
    <div className="mb-4">
      <label className="flex flex-row text-sm font-medium text-gray-700">
        <p>{t(label ?? "")}</p>
        {required && <p>*</p>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={t(placeholder ?? "")}
        disabled={disabled}
        className={
          className ??
          "text-[10px] text-gray-600 border border-gray-300 rounded-2xl h-[40px] p-2 w-full focus:outline-[#fc4434] focus:border-[#fc4434]"
        }
      />
      {error && <p className="text-red-500 text-xs mt-1">{t(error ?? "")}</p>}
    </div>
  );
};
