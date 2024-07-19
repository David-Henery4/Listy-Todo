

interface FormInput {
  label: string;
  id: string;
  name: string;
}

const Input = ({ id, label, name }: FormInput) => {
  return (
    <div className="mt-4 first:m-0">
      <label htmlFor={id}>{label}</label>
      <input name={name} id={id} className="p-2 mt-2 w-full outline-none" type="text" />
    </div>
  );
};

export default Input;
