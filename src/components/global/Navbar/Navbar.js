import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {login} from "../../../Features/authentication/authenticationSlice"
import { Link } from "react-router-dom";
import avatar from "../../../images/personal.png";
import "./navbar.scss";
export default function Navbar() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(login())
  } , [dispatch])
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="color">AML </span>
            <span>Cinma</span>
          </Link>
        </div>
        <div className="personal-img">
          <img src={avatar} alt="logo" />
        </div>
      </div>
    </nav>
  );
}
