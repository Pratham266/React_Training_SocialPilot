import React from 'react'

const Button = ({buttonText,classAttribute,disabled,handleClick}) => {
  return (
    <>
      <button className={`${classAttribute} text-white font-semibold px-6 w-28 h-8 border rounded-sm`}
                    onClick={handleClick}
                    disabled={disabled}>
                        <div className="flex items-center justify-center">
                      {buttonText}
                    </div>
                    </button>
    </>
  )
}

export default Button
