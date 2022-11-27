import { Contract, ethers } from "ethers";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Admin() {
  const [values, setValues] = useState({
    id: 0,
    name: "",
    department: "",
    contact: "",
  });

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const ValidateEmail = (mail) => {
    let mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(mailformat)) return true;
    else return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.id === 0) {
      toast.error("Please insert the id");
      return;
    }
    if (values.name === "") {
      toast.error("Please insert the name");
      return;
    }
    if (values.id === "") {
      toast.error("Please insert the department");
      return;
    }
    if (values.id === "") {
      toast.error("Please insert the email");
      return;
    }
    if (!ValidateEmail(values.contact)) {
      toast.warning("Incorrect email.");
      return;
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex py-20 flex-col justify-center">
        <h1 className="font-bold mb-32">Teacher Registration</h1>
        <div className="flex flex-col gap-5 px-96 mb-12">
          <div className="flex justify-between">
            <h3>Enter Teacher Id:</h3>
            <input
              className="border-2 border-gray-700 px-5 rounded"
              name="id"
              type="number"
              value={values.id}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex justify-between">
            <h3>Enter Teacher Name:</h3>
            <input
              className="border-2 border-gray-700 px-5 rounded"
              name="name"
              value={values.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex justify-between">
            <h3>Enter Teacher Department:</h3>
            <input
              className="border-2 border-gray-700 px-5 rounded"
              name="department"
              value={values.department}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex justify-between">
            <h3>Enter Teacher Address:</h3>
            <input
              className="border-2 border-gray-700 px-5 rounded"
              name="address"
            />
          </div>
          <div className="flex justify-between">
            <h3>Enter Teacher Contact:</h3>
            <input
              className="border-2 border-gray-700 px-5 rounded"
              name="contact"
              type="email"
              value={values.contact}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="flex justify-center hover:cursor-pointer">
          <div
            className="bg-blue-500 py-4 px-10 rounded-md w-max"
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </div>
        </div>
      </div>
    </>
  );
}
