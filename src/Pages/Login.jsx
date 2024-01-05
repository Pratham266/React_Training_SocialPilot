import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const countryLanguages = [
    { flag: "France.png", name: "French" },
    { flag: "germany.png", name: "German" },
    { flag: "Portugal.png", name: "Portuguese" },
    { flag: "spain.png", name: "Spanish" },
    { flag: "uk.png", name: "English" },
  ];

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
    console.log("emailregex", emailRegex.test(email));

    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    console.log("Login Data:", loginData);

    setTimeout(() => {
        if(!isValidEmail(loginData.email) || !isValidPassword(loginData.password)){
            setLoading(false);
            setErrorEmail(true);
            setErrorPassword(true);
        }
      if (!isValidEmail(loginData.email)) {
        setLoading(false);
        setErrorEmail(true);
      } else if (!isValidPassword(loginData.password)) {
        setLoading(false);
        setErrorPassword(true);
      } else {
        setLoading(false);
        alert("Login Successful");
      }

    }, 2000);
  };

  if (loading) {
    return (
      <>
        <div class="absolute bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
          <div class="flex items-center">
            <svg
              class="animate-spin h-8 w-8 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>
      </>
    );
  } else {
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
                <label className="block text-black-600 text-sm mb-4">
                  Email*
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className={`w-full border ${
                    errorEmail ? "border-red-500" : ""
                  } bg-gray-200 py-1 px-1 focus:outline-none focus:border-blue-500 focus:bg-white`}
                  autoComplete="off"
                  value={loginData.email}
                  onChange={handleOnChange}
                />
                {errorEmail && (
                  <p style={{ color: "red" }} className="text-sm italic">
                    Email is Not valid
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-black-600 text-sm mb-4">
                  Password*
                </label>

                <div className="relative w-full container ">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className={`w-full border ${
                      errorPassword ? "border-red-500" : ""
                    } bg-gray-200 py-1 px-1 focus:outline-none focus:border-blue-500 focus:bg-white`}
                    autoComplete="off"
                    value={loginData.password}
                    onChange={handleOnChange}
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={handleTogglePassword}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>

                {/* <span onClick={handleTogglePassword}>
                    
                  </span> */}

                {errorPassword && (
                  <p style={{ color: "red" }} className="text-sm italic">
                    Password must be at least 8 characters long and include at
                    least one uppercase letter, one lowercase letter, and one
                    digit.
                  </p>
                )}
              </div>

              <div className="relative w-full mt-6">
                <button
                  type="submit"
                  className={`${
                    loginData.email === "" || loginData.password === ""
                      ? "bg-blue-100 cursor-not-allowed"
                      : "bg-blue-600"
                  }  text-white font-semibold px-6 w-28 h-8 border rounded-sm`}
                  onClick={handleLogin}
                  disabled={loginData.email === "" || loginData.password === ""}
                >
                  Sign in
                </button>

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

              <div className="flex mt-2">
                {countryLanguages.map((ele, index) => {
                  return (
                    <div className="flex-1" key={index}>
                      <div className="flex mt-2  pr-4 pl-4">
                        <img src={ele.flag} className="h-4 w-4 mr-1" />
                        <span className="m-[1px] text-xs text-blue-500 ">
                          {ele.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
