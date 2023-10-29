import "./Login.css";
import loginImage from "../Login/logain-image/Intersect.svg";
import iconEmail from "../Login/logain-image/Email.svg";
import iconShow from "../Login/logain-image/View.svg";
import eye from "../Login/logain-image/eyepass.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [accept, setAccept] = useState("");
  const [showpass, Setshowpass] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isFilledPass, setIsFilledPass] = useState(false);

  //show password or
  function ShowPassword() {
    Setshowpass(!showpass);
  }

  //check if email and password has a value
  const checkEmailAndPass = () => {
    email.length === "" ? setIsFilled(false) : setIsFilled(true);
    password === "" ? setIsFilledPass(false) : setIsFilledPass(true);
  };

  async function submit(e) {
    e.preventDefault();
    setAccept(true);
  }

  return (
    <div className="login grid grid-cols-1 lg:grid-cols-2  h-screen overflow-hidden ">
      <div className="relative lg:grid-cols-7  pt-20 m-3  sm:pt-20 sm-ps-0 md:pt-40 md:ps-14">
        <div className="absolute rotate-45 w-80 h-80  top-24  bg-sky-50 rounded-3xl -start-14"></div>
        <div className="fixed rotate-45 w-80 h-80  top-[600px] sm:top-[470px] start-28  bg-sky-50 rounded-3xl"></div>
        <div className="relative text-center sm:text-start">
          <h3 className="text-primary text-4xl text mb-6 font-semibold ">
            Login in Med - Sal
          </h3>
          <div className="min-w-[300px]">
            <p className="text-mySlate text-md">
              Don’t have an account with us?
              {
                <Link
                  className="text-success text-md border-b-[1px] border-success"
                  to={"/register"}
                >
                  Create account
                </Link>
              }
            </p>
          </div>
        </div>
        <form onSubmit={submit} className="mt-10 relative">
          <div className="relative mb-5">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                SetEmail(e.target.value);
                checkEmailAndPass();
              }}
              className={`input p-2 w-full outline-none border-solid border-[1px] border-myGray-300 focus:border-secondary mb-2 rounded-lg relative ${
                accept && email === "" ? "border-error" : ""
              }`}
            />
            <label
              className={`placeholder px-1 absolute  start-3 text-sm text-gray-500 ${
                isFilled
                  ? "-top-[13px] bg-gradient-to-b from-transparent from-65% to-white to-35%"
                  : "top-3"
              }`}
            >
              Email Address
            </label>
            <div className="absolute end-4 top-[16px]">
              <img className="" src={iconEmail} alt="" />
            </div>
            {accept && email === "" && (
              <p className="text-sm text-error">This field is required</p>
            )}
          </div>

          <div className=" relative mb-1  ">
            <input
              type={showpass ? "text" : "password"}
              value={password}
              onChange={(e) => {
                SetPassword(e.target.value);
                checkEmailAndPass();
              }}
              className={`input p-2 w-full outline-none border-solid border-[1px] border-myGray-300 focus:border-secondary rounded-lg  relative ${
                accept && password === "" ? "border-error" : ""
              }`}
            />
            <label
              className={`placeholder px-1 bg-transparent absolute  start-3 text-sm text-gray-500 ${
                isFilledPass
                  ? "-top-[13px] bg-gradient-to-b from-transparent from-65% to-white to-35%"
                  : "top-3"
              }`}
            >
              Password
            </label>
            {accept && password === "" && (
              <p className="text-sm text-error">This field is required</p>
            )}

            <div className="absolute end-4 top-[16px] cursor-pointer">
              <img
                onClick={() => ShowPassword()}
                className="w-4 cursor-pointer "
                src={showpass ? eye : iconShow}
                alt=""
              />
            </div>
          </div>
          <div className="text-end mb-5">
            <Link
              className="text-sm texe-mySlate hover:text-secondary transition hover:animate-bounce"
              to={""}
            >
              Forget password ?
            </Link>
          </div>

          <button
            className=" rounded-lg  p-2 w-full text-white bg-gradient-to-b from-primary to-secondary hover:opacity-[0.9]"
            type="submit"
          >
            Login in med - sal
          </button>
        </form>
      </div>
      <div className=" lg:grid-cols-5 hiddin lg:block ltr:flex ltr:flex-col ltr:justify-between rtl:flex rtl:flex-col rtl:justify-between ">
        <div className="hidden lg:block">
          <div className=" relative start-[20rem] top-[9.5rem] xl:start-[17rem] origin-center ltr:rotate-45 rtl:-rotate-45  ">
            <div className="absolute w-[346px] h-[346px] xl:w-[370px]  xl:h-[370px] rounded-2xl bg-gradient-to-r from-primary to-secondary">
              <div className="absolute z-10 w-[340px] h-[340px] xl:w-[364px]  xl:h-[364px] rounded-2xl top-[3px] start-[3px] bg-white"></div>
            </div>
          </div>
          <div className=" relative start-[27rem] top-24 origin-center ltr:rotate-45 rtl:-rotate-45">
            <div className="absolute  w-[400px] h-[400px] xl:w-[450px]  xl:h-[450px]  rounded-2xl bg-myGray-100 shadow-md overflow-hidden">
              <img
                src={loginImage}
                alt="img"
                className="absolute hidden xl:block rtl:start-16  z-10 w-[450px] h-[500px] ltr:-rotate-45 rtl:rotate-45 ltr:top-9 ltr:start-16 rtl:top-16"
              />
            </div>
          </div>
        </div>

        <div className="relative pb-0 md:pb-10  sm:text-start text-center sm:ps-5 md:ps-20 lg:ps-40   ">
          <h3 className="bg-gradient-to-b from-primary to-secondary text-transparent bg-clip-text mb-4 text-xl font-bold">
            Welcome back to Med - Sal ...
          </h3>
          <p className="text-md text-mySlate">
            We are a platform that seeks to connect clinical patients with
            doctors in various medical specialties and pharmacies all over the
            Emirates.
          </p>
        </div>
      </div>
    </div>
  );
}
