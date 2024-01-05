import React, { useEffect, useState } from "react";

const Home = () => {
  const [joke, setJoke] = useState([]);

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
      <div>Home Page</div>
    </>
  );
};

export default Home;
