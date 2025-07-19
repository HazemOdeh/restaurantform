import { SharedTextInput } from "../../shared/TextInput";
import { Link } from "react-router";
import { useLogin } from "../../hooks/useLogin";

export const Login = () => {
  const { values, errors, setFieldValue, handleSubmit } = useLogin();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md bg-white rounded-2xl border-1 border-gray-300 flex flex-col justify-center items-center">
        <div className="w-full flex flex-row text-[#fc4434] justify-end font-bold">
          <button className="cursor-pointer font-semibold text-base px-12 py-6">
            العربية
          </button>
        </div>
        <img
          src="https://app.shnp.me/shanablogo.svg"
          alt="logo"
          className="h-[166px]"
        />
        <div className=" w-7/8 flex flex-col gap-[1rem]">
          <p className="font-bold text-3xl text-center">
            Log into Restaurant Panel
          </p>
          <p className="text-sm text-center font-medium">
            Please enter your restaurant email address to create an account or
            to log in
          </p>
          <SharedTextInput
            placeholder="Username"
            value={values.loginEmail}
            error={errors.loginEmail}
            onChange={(e) => setFieldValue("loginEmail", e.target.value)}
            className="border-1 rounded-sm border-gray-300 p-3 w-full focus:outline-[#fc4434]"
          />
          <SharedTextInput
            type="password"
            value={values.loginPassword}
            error={errors.loginPassword}
            onChange={(e) => setFieldValue("loginPassword", e.target.value)}
            placeholder="Password"
            className="border-1 rounded-sm border-gray-300 p-3 w-full focus:outline-[#fc4434]"
          />
          <p className="text-sm">
            Can’t Remember Your Current Password?{" "}
            <a
              href="https://app.shnp.me/resetPassword"
              className="text-[#fc4434] text-decoration-line: underline"
            >
              Reset Password{" "}
            </a>
          </p>
          <button
            className="p-3 rounded-full text-white text-md font-bold bg-[#fc4434] w-full border border-transparent hover:text-red-500 hover:bg-white hover:border-red-500 cursor-pointer mt-2"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Join Shanap
          </button>
          <Link
            to="/"
            className="text-center mt-2 mb-10 text-[#fc4434] font-semibold cursor-pointer"
          >
            Don't have an account? Sign up Instead
          </Link>
        </div>
      </div>
    </div>
  );
};
