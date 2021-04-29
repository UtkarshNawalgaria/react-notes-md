// import { Auth as AWSAuth } from "aws-amplify";
import { useState } from "react";
import { useAuth } from "../hooks/auth";

let formInputState = {
  username: "",
  email: "",
  password: "",
  verificationCode: "",
};

const buttonState = {
  signUp: "Sign Up",
  signIn: "Sign In",
  confirmSignUp: "Confirm SignUp",
};

const FormButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="rounded-lg bg-red-400 w-80 py-4 px-6 text-white font-semibold shadow-md hover:bg-red-500 hover:shadow-lg transition duration-300 ease-in-out">
      {buttonState[text]}
    </button>
  );
};

const Auth = () => {
  const [formState, setFormState] = useState("signUp");
  const [formInput, setFormInput] = useState(formInputState);
  const auth = useAuth();

  function handleChange(e) {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formState === "signUp") {
      auth.signUp({ ...formInput });
      setFormState("confirmSignUp");
    }
    if (formState === "confirmSignUp") {
      auth.confirm({ ...formInput });
      setFormState("signIn");
    }
    if (formState === "signIn") {
      auth.signIn({
        username: formInput.username,
        password: formInput.password,
      });
    }
  }

  let Form = null;

  if (formState === "signUp") {
    Form = (
      <form onSubmit={handleSubmit}>
        <input
          className="rounded-lg block bg-gray-100 mb-2 w-80 border-none py-4 px-6 cursor-text"
          type="text"
          name="username"
          placeholder="Username"
          required={true}
          onChange={handleChange}
        />
        <input
          className="rounded-lg block bg-gray-100 mb-2 w-80 border-none py-4 px-6 cursor-text"
          type="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={handleChange}
        />
        <input
          className="rounded-lg block bg-gray-100 mb-2 w-80 border-none py-4 px-6 cursor-text"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <FormButton text="signUp" />
      </form>
    );
  }

  if (formState === "signIn") {
    Form = (
      <form onSubmit={handleSubmit}>
        <input
          className="rounded-lg block bg-gray-100 mb-2 w-80 border-none py-4 px-6"
          type="text"
          name="username"
          placeholder="Username"
          required={true}
          onChange={handleChange}
        />
        <input
          className="rounded-lg block bg-gray-100 mb-2 w-80 border-none py-4 px-6"
          type="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={handleChange}
        />
        <FormButton text="signIn" />
      </form>
    );
  }

  if (formState === "confirmSignUp") {
    Form = (
      <form onSubmit={handleSubmit}>
        <input
          className="rounded-lg block bg-gray-100 mb-2 w-80 border-none py-4 px-6"
          type="text"
          name="username"
          placeholder="Username"
          required={true}
          onChange={handleChange}
        />
        <input
          className="rounded-lg block bg-gray-100 mb-2 w-80 border-none py-4 px-6"
          name="verificationCode"
          placeholder="verification Code"
          required={true}
          onChange={handleChange}
        />
        <FormButton text="confirmSignUp" />
      </form>
    );
  }

  return (
    <div>
      <div className="flex justify-between mb-2">
        <p
          onClick={() => setFormState("signUp")}
          className={
            "font-semibold cursor-pointer " +
            (formState === "signUp" ? "text-gray-700" : "text-gray-400")
          }>
          SIGN UP
        </p>
        <p
          onClick={() => setFormState("signIn")}
          className={
            "font-semibold cursor-pointer " +
            (formState === "signIn" ? "text-gray-700" : "text-gray-400")
          }>
          SIGN IN
        </p>
      </div>
      <div>{Form}</div>
    </div>
  );
};

export default Auth;
