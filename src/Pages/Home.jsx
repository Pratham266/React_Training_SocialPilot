import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { fetchYoutube, logoutUser } from "../redux";
import DetailsCardComponent from "../Components/DetailsCardComponent";

const Home = () => {
  const { user, youtube } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");

    alert("Logout successful");
  };

  useEffect(() => {
    if(!user.email || !user.password){
      alert("Please Login First!")
      navigate("/login")
    }
    dispatch(fetchYoutube());
    console.log("YOUTUBE DATA",youtube);
  }, [dispatch]);


  return youtube.loading ? (
    <h2>Loading...</h2>
  ) : youtube.error ? (
    <p>{youtube.error}</p>
  ) : (
    <>
      <div className="grid grid-cols-12 gap-1 bg-[#eff6ff]  h-screen">
        {/* Header */}

        <div className="header col-span-12 bg-[#172554] flex">
          <h2 className="mb-2 text-center	pt-2 leading-none tracking-tight text-white md:text-4xl lg:text-6xl">
            Welcome, {user && user.email}
          </h2>
          <Button
            classAttribute={"text-center m-8"}
            buttonText={"Logout"}
            handleClick={handleLogout}
          />
        </div>

        {/*Menu items at left-sidebar*/}
        <div className="col-span-12 rounded-lg border  bg-[#172554] p-2 sm:col-span-4">
            {youtube?(youtube.data?  
              (
                youtube.data.map((item) => (
                   <p> <Link  className="text-white" to={`/youtube/${item.id}`}> {item.name} </Link></p>
                ))
              )
              :""):""}
         
        </div>

        {/* Main Content at right-sidebar */}
        <div className="col-span-12 rounded-lg border  bg-[#172554] p-16 sm:col-span-8">
          <DetailsCardComponent/>
        </div>
        {/* <div className="footer col-span-12  border  bg-[#93c5fd] py-2">
          Footer
        </div> */}
      </div>
    </>
  );

};

export default Home;
