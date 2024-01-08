import React, { useCallback, useEffect, useState } from "react";
import EntryField from "../Components/EntryField";
import ErrorAtEntryField from "../Components/ErrorAtEntryField";
import CountryLanguage from "../Components/CountryLanguage";
import ButtonLoader from "../Components/ButtonLoader";
import Button from "../Components/Button";

import { isValidEmail, isValidPassword } from "../Js/validator";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  // const debounce = (func, delay) => {
  //   let timerOut;

  //   return function (...args) {
  //     clearTimeout(timerOut);
  //     timerOut = setTimeout(() => {
  //       func.apply(this, args);
  //     }, delay);
  //   };
  // };

  // const debounce = function(fn,d){
  //   let timer;
  //   return function(){
  //     let context = this;
  //     let args = arguments;
  //     clearTimeout(timer);

  //     timer = setTimeout(()=>{
  //       fn.apply(context,arguments);
  //     },d)
  //   }
  // }

  const handleOnChange = (e) => {
    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    clearError(e.target.name);
  };

  // const betterFunction = debounce(handleOnChange,300);

  // const handleOnChange = (e)=>{
  //   debounce((e) => {
  //     setLoginData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  //   }, 500)
  // }

  // const handleOnChange = useCallback(
  //   debounce((e) => {
  //     setLoginData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  //   }, 500),
  //   []
  // );

  const clearError = (fieldName) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName];
      return updatedErrors;
    });
  };

  
  const setError = (fieldName, errorMessage) => {
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }));
  };
  const handleLogin = (e) => {
    const { email, password } = loginData;
    const validEmail = isValidEmail(email);
    const validPassword = isValidPassword(password);

    setLoading(true);

    setTimeout(() => {
      if (!validEmail) {
        setError("email", "email is not valid!");
      }

      if (!validPassword) {
        setError(
          "password",
          "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and onedigit."
        );
      }

      if (validEmail && validPassword) {
        setLoading(false);
        alert(`Login Successful Email : ${email} password : ${password} `);
        setLoginData({ email: "", password: "" });
        dispatch(loginUser(email,password));
        navigate("/")
      }
      setLoading(false);
    }, 500);
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
                required
                id={"email"}
                name={"email"}
                type={"text"}
                value={loginData.email}
                onChange={handleOnChange}
                error={errors.hasOwnProperty("email")}
              />

              {errors.hasOwnProperty("email") && (
                <ErrorAtEntryField errorMessage={errors.email} />
              )}
            </div>

            <div className="mb-4">
              <EntryField
                label={"Password"}
                id={"password"}
                name={"password"}
                type={"password"}
                value={loginData.password}
                error={errors.hasOwnProperty("password")}
                onChange={handleOnChange}
                required
              />

              {errors.hasOwnProperty("password") && (
                <ErrorAtEntryField errorMessage={errors.password} />
              )}
            </div>

            <div className="relative w-full mt-6">
              {loading ? (<ButtonLoader />) : 
              (    
                 <Button buttonText={"Sign in"} classAttribute={loginData.email === "" || loginData.password === ""
                        ? "bg-blue-100 cursor-not-allowed"
                        : "bg-blue-600"}
                        disabled={loginData.email === "" || loginData.password === ""}
                        handleClick={handleLogin}
                        />             
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
