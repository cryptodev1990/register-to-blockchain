import React from "react";
import Github from "../assets/github-logo.png";
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function Header() {

  const navigate = useNavigate();
  return (
    <div className="flex justify-between pl-32 py-10 shadow-xl">
      <h3 className="font-semibold text-gray-600">Land Register</h3>
      <div className="flex gap-4 items-center">
        <h4 className="hover:cursor-pointer text-gray-600">Home</h4>
        <h4 className="hover:cursor-pointer text-gray-600" onClick={() => navigate("/admin")}>Admin</h4>
        <h4 className="hover:cursor-pointer text-gray-600">Teacher</h4>
        <h4 className="hover:cursor-pointer text-gray-600">Student</h4>
        <h4 className="hover:cursor-pointer text-gray-600">About</h4>
        <img src={Github} alt="github" title="Github title" className="h-7 w-7 hover:cursor-pointer mx-16" />
      </div>
    </div>
  )
}