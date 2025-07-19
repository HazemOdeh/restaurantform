import { MultiSelect } from "react-multi-select-component";

type IProps = {
  label: string;
  required?: boolean;
  options: { label: string; value: string }[];
  value: [];
  onChange: (value: string[]) => void;
};
export const MultipleSelect = ({
  value,
  onChange,
  label,
  required,
  options,
}: IProps) => {
  return (
    <div>
      <label className="flex flex-row text-sm font-medium text-gray-700">
        <p>{label}</p>
        {required && <p className="text-red-500">*</p>}
      </label>
      <MultiSelect
        options={options}
        value={value}
        disableSearch
        hasSelectAll={false}
        onChange={onChange}
        labelledBy="Select..."
      />
    </div>
  );
};
