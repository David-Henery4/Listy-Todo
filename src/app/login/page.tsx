import Form from "@/components/login/Form";
import ProviderBtn from "@/components/login/provider-btn/ProviderBtn";

const LoginPage = () => {
  return (
    <main className="flex justify-start items-center flex-col py-12 px-6 text-center text-todoText_light dark:text-white">
      <h1 className="text-6xl text-brightBlue">Todo List</h1>
      <h2 className="text-4xl font-light mt-8">Login</h2>

      <div className="w-full mt-6 p-6 rounded-md shadow-md max-w-[450px] bg-white smLap:p-10 dark:bg-todoBg_dark">
        <div className="flex flex-col gap-4">
          <ProviderBtn providerName="google" />
          <ProviderBtn providerName="github" />
        </div>

        <div className="flex justify-center items-center gap-4 my-8">
          <div className="w-full h-[2px] bg-brightBlue rounded-3xl"></div>
          <p>or</p>
          <div className="w-full h-[2px] bg-brightBlue rounded-3xl"></div>
        </div>

        <Form />

        
      </div>
    </main>
  );
};

export default LoginPage;
