
interface FormInput {
  label: string;
  id: string;
  name: string;
}

const Input = ({ id, label, name }: FormInput) => {
  return (
    <div className="w-full">
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        id={id}
        className="p-2 mt-2 w-full outline-none rounded-md dark:bg-veryDarkNavy_dark bg-[#efebeb]"
        type="text"
      />
    </div>
  );
};

export default Input;
