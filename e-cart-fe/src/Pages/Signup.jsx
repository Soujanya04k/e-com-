import axios from "axios";
import React from "react";
import { useState } from "react";
import "./CSS/Signup.css";
import { Shop } from "./Shop";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const Signup = () => {
  const initialData = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required("Enter email ID"),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });

  const [inputData, setInputData] = useState(initialData);
  const [flag, setFlag] = useState(true)

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if(flag) setFlag(!flag);
    console.log(inputData, "before posting");
    axios
      .post("http://localhost:1337/api/v1/signup", inputData)
      .then((response) => {
        console.log("posted successfully", response);
      })
      .catch((error) => {
        console.log("error occured while posting", error);
      });
    console.log(inputData, "after posting");
  };

  return (
    <>
    {flag ?
     ( <div className="continer">
       <form onSubmit={handleSubmit(onSubmit)}>
      <h1>LOGIN</h1>
        <label className="label-name">Full Name :</label>
        <input
          type="text"
          name="fullName"
          value={inputData.fullName}
          onChange={handleData}
          className="fullName"
        ></input>
         <p className="name-error">{errors.fullName?.message}</p>
        <br />
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={inputData.email}
          onChange={handleData}
          className="email"
        ></input>
         <p className="email-error">{errors.email?.message}</p>
        <br />
        <label>Password :</label>
        <input
          type="password"
          name="password"
          value={inputData.password}
          onChange={handleData}
          className="password"
        ></input>
         <p className="password-error">{errors.password?.message}</p>
        <br />
        <label>Confirm password :</label>
        <input
          type="password"
          name="confirmPassword"
          value={inputData.confirmPassword}
          onChange={handleData}
          className="confirmPassword"
        ></input>
         <p className="confirmpassword-error">{errors.confirmPassword?.message}</p>
        <br />
        <button className="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
        <br />
        </form>
        </div>)
        :
        (<Shop/>)
    }
      
    </>
  );
};
