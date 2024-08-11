export interface TextInputProps {
  label: string;
  type?: "text" | "password" | "email";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  name: string;
  additionalClasses?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  name,
  additionalClasses = "",
}) => {
  return (
    <div className="mb-4 bg-transparent">
      <div className="flex justify-between items-center mb-[10px]">
        <label className="block text-sm text-inputLabelColor font-medium">
          {label}
        </label>

        {type === "password" && (
          <span className="font-medium text-xs text-inputLabelColor">
            Forgot password?
          </span>
        )}
      </div>

      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full py-3 px-3 text-white placeholder-inputTextColor border-[1.5px] border-inputBorderColor bg-transparent rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 ${additionalClasses}`}
        />

        {icon && (
          <img
            src={icon}
            alt="icon"
            className="absolute right-[10px] top-[15px]"
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;
