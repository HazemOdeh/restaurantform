import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type IProps = {
  label: string;
  value: string;
  onChange: (e: string) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
};
const PhoneNumberInput = ({
  value,
  label,
  onChange,
  required,
  disabled,
  error,
}: IProps) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="flex flex-row text-sm font-medium text-gray-700">
        <p>{label}</p>
        {required && <p>*</p>}
      </label>
      <PhoneInput
        onChange={onChange}
        value={value}
        disabled={disabled}
        country={"sa"}
        inputStyle={{ width: "100%", height: "40px" }}
        containerStyle={{ width: "100%" }}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
