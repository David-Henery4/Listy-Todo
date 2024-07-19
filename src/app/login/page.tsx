import Form from "@/components/login/Form";

const LoginPage = () => {
  return (
    <main className="flex justify-start items-center flex-col p-12 text-center">
      <h1 className="text-6xl">Todo List</h1>
      <h2 className="text-4xl font-light mt-8">Login</h2>

      <div className="w-full mt-4 p-6 rounded-md shadow-md max-w-[450px] bg-white dark:bg-todoBg_dark">
        <Form/>
      </div>
    </main>
  );
};

export default LoginPage;
