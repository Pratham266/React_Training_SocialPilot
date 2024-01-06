import React from 'react'

const ErrorAtEntryField = ({errorMessage}) => {
  return (
    <>
      <p style={{ color: "red" }} className="text-sm italic">
      {errorMessage}
      </p>
    </>
  )
}

export default ErrorAtEntryField
