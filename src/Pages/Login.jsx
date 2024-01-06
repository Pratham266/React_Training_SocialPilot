import React, { useState } from "react";
import EntryField from "../Components/EntryField";
import ErrorAtEntryField from "../Components/ErrorAtEntryField";
import CountryLanguage from "../Components/CountryLanguage";
import ButtonLoader from "../Components/ButtonLoader";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  //{email,pass}  Object.hasown(email)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidEmail = (email) => {
    console.log(email);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    console.log("Login Data:", loginData);

    setTimeout(() => {
      if (!isValidEmail(loginData.email)) {
        setLoading(false);
        setErrorEmail(true);
      }
      if (!isValidPassword(loginData.password)) {
        setLoading(false);
        setErrorPassword(true);
      }

      if (
        isValidEmail(loginData.email) &&
        isValidPassword(loginData.password)
      ) {
        setLoading(false);
        alert(
          `Login Successful Email : ${loginData.email} password : ${loginData.password} `
        );
      }
    }, 2000);
  };

  return (
    <>
      <div className="bg-white flex justify-center items-center h-screen">
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="login.png"
            alt="Login image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className=" md:p-44 sm:20  w-full lg:w-1/2">
          <h1 className="text-2xl  mt-4 mb-4">Sign in to SocialPilot</h1>
          <div>
            <div className="mb-6">
              <EntryField
                label={"Email"}
                required={true}
                id={"email"}
                name={"email"}
                type={"text"}
                value={loginData.email}
                onChange={handleOnChange}
                error={errorEmail}
              />
              {errorEmail && (
                <ErrorAtEntryField errorMessage={"email is not valid"} />
              )}
            </div>

            <div className="mb-4">
              <EntryField
                label={"Password"}
                id={"password"}
                name={"password"}
                type={"password"}
                value={loginData.password}
                error={errorPassword}
                onChange={handleOnChange}
                required
              />

              {errorPassword && (
                <ErrorAtEntryField
                  errorMessage={`Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and onedigit.`}
                />
              )}

            </div>

            <div className="relative w-full mt-6">
              {loading ? (
                <>
                  <ButtonLoader />
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className={`${
                      loginData.email === "" || loginData.password === ""
                        ? "bg-blue-100 cursor-not-allowed"
                        : "bg-blue-600"
                    }  text-white font-semibold px-6 w-28 h-8 border rounded-sm`}
                    onClick={handleLogin}
                    disabled={
                      loginData.email === "" || loginData.password === ""
                    }
                  >
                    <div className="flex items-center justify-center">
                      Sign in
                    </div>
                  </button>
                </>
              )}

              <div className="text-blue-500 absolute inset-y-0 right-0 flex items-center px-4">
                <span className="hover:underline text-sm">
                  Forgot Password?
                </span>
              </div>
            </div>

            <div className="mt-12 text-sm mb-2">
              <p className="ml-6 mb-8">
                By continuing you agree to SocialPilot's
                <span className="text-blue-500 "> Terms of Service</span>
              </p>
            </div>

            <hr className="h-[4px] bg-gray-100" />

            <CountryLanguage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
