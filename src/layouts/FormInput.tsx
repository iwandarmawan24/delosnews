interface FormInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <div className="mb-4 w-[100%]">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full rounded-md border ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        } px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm`}
      />
      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
