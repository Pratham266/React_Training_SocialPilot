import React from 'react'

const CountryLanguage = () => {
    const countryLanguages = [
        { flag: "France.png", name: "French" },
        { flag: "germany.png", name: "German" },
        { flag: "Portugal.png", name: "Portuguese" },
        { flag: "spain.png", name: "Spanish" },
        { flag: "uk.png", name: "English" },
      ];
  return (
    <>
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
    </>
  )
}

export default CountryLanguage
