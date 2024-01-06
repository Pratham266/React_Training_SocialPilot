import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const EntryField = ({
  label,
  id,
  name,
  type,
  value,
  error,
  onChange,
  required
}) => {

    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
      };

    const isPassword = type === "password";

  return (
    
    <>
      <label className="block text-black-600 text-sm mb-4">{label}{required?"*":""}</label>

        <div className={isPassword?`relative`:``}>
      <input
        type={isPassword ?(showPassword ? "text":"password"):type}
        id={id}
        name={name}
        className={`w-full border ${
            error ? "border-red-500" : ""
        } bg-gray-200 py-1 px-1 focus:outline-none focus:border-blue-500 focus:bg-white`}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />

      {isPassword &&(<button
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={handleTogglePassword}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>)}
    </div>

    
    
    </>
  );
};

export default EntryField;
