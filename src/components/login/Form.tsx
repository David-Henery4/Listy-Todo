import Input from "./input/Input";
import SubmitBtn from "./submit/SubmitBtn";


const Form = () => {
  return (
    <form>
      <div className="flex flex-col justify-center items-center gap-4">
        <Input name="username" id="username" label="Username" />
        <Input name="password" id="password" label="Password" />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default Form;
