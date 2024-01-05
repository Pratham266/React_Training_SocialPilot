import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [joke, setJoke] = useState([]);

  const formatTimeAndDate = (d) => {
    var now = new Date(d)
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
    return `${date}  ${time}`
}

  const getJoke = async () => {
    try {
      const res = await fetch(
        `https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-RapidAPI-Key":
              "7f04a853bdmsh6f6dbb3609512bbp16d78fjsn32483f33147d",
            "X-RapidAPI-Host":
              "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
          },
        }
      );

      const data = await res.json();
      if (data) {
        console.log("Data : ", data);
      }
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);
  return (
    <>
      <div className="grid grid-cols-12 gap-1 bg-[#eff6ff]  h-screen">
        {/* Header */}
        <div className="header col-span-12 bg-[#93c5fd] ">
          <h1 className="mb-4 text-4xl font-extrabold text-center	 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            CHUCK NORRIS JOKES
          </h1>
        </div>

        {/*Menu items at left-sidebar*/}
        <div className="col-span-12 rounded-lg border  bg-[#bfdbfe] p-2 sm:col-span-4">
          <label
            for="large"
            className="block mb-2 text-base font-medium text-gray-900"
          >
            Select Category
          </label>
          <select
            id="large"
            className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a Category</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        {/* Main Content at right-sidebar */}
        <div className="col-span-12 rounded-lg border  bg-[#bfdbfe] p-16 sm:col-span-8">
          
        
<div className="w-full p-4  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <h5 className="mb-2 text-gray-900 ">Created At : {formatTimeAndDate("2020-01-05 13:42:22.980058")}</h5>
  <h5 className="mb-2 text-gray-900 ">Updatedd At : {formatTimeAndDate("2020-01-05 13:42:22.980058")}</h5>
  <hr/>
    <h1 className="mb-2   font-bold text-2xl text-center text-gray-900 italic"><FontAwesomeIcon icon={faQuoteLeft} /> Work fast from anywhere.Work fast from anywhereWork fast from anywhereWork fast from anywhereWork fast from anywhere. <FontAwesomeIcon icon={faQuoteRight} /></h1>
    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        

        

    </div>
</div>

        </div>
        <div className="footer col-span-12  border  bg-[#93c5fd] py-2">
          Footer
        </div>
      </div>
    </>
  );
};

export default Home;
