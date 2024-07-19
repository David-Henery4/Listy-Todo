import Input from "./input/Input";

const Form = () => {
  return (
    <form>
      <Input name="username" id="username" label="Username"/>
      <Input name="password" id="password" label="Password"/>
    </form>
  );
}

export default Form