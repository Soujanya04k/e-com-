import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import './CSS/LoginPage.css'
import { Shop } from "./Shop";
import axios from "axios";


export const LoginPage = () => {

const [flag, setFlag] = useState(true)
const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[userData,setUserData]=useState([])

  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required("Enter email ID"),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(typeof data);
    setUserData((prevData) => { return [
        data,
        ...prevData,
      ]});
      
    if(flag) setFlag(!flag);

    // console.log('onSubmit fn is being called')
    axios
      .post("http://localhost:1337/api/v1/signup", data)
      .then((response) => {
        console.log("posted successfully", response);
      })
      .catch((error) => {
        console.log("error occured while posting", error);
      });
    
  //  console.log('end of onsubmit fn') 
  };


  return (
   (flag ? 
   (<div className="container">
      <div
        id="form"
        className="in-container"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="header">Log in</h2>

            <div id="Name" className="Name">
              <input 
                type="text"
                placeholder="Name..."
                className="name-input"
                {...register("fullName")}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            
          
          <p className="name-error">{errors.fullName?.message}</p>
          <br></br>

          <input
            type="text"
            placeholder="Email..."
            {...register("email")}
            className="email"
            value={email}
              onChange={(event) => setEmail(event.target.value)}
          />
          <p className="email-error">{errors.email?.message}</p>
          <br></br>

          <input
            type="password"
            placeholder="Password..."
            {...register("password")}
            className="password"
            value={password}
              onChange={(event) => setPassword(event.target.value)}
          />
          <p className="password-error">{errors.password?.message}</p>
          <br></br>
          <input
            type="password"
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
            className="confirm-password"
          />
          <p className="confirm-password-error">
            {errors.confirmPassword?.message}
          </p>
          <br></br>
          <input
            type="submit"
            className="submit"
            />
        </form>
      </div>
    </div>) :(<Shop/>)
  ));
};
