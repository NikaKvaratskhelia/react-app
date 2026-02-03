interface InputProps {
  id: string;
  label: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export default function Input({ id, label, type, value, onChange, error, required }: InputProps) {
  return (
    <div className="flex flex-col items-start gap-2 flex-1">
      <label className="text-[16px] font-medium" htmlFor={id}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={`border rounded-[10px] py-2.5 px-4 w-full ${
          error ? "border-red-500" : "border-[#9F9F9F]"
        }`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
