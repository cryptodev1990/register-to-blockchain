import { ethers } from "ethers";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { abi } from "../abi";
import "react-toastify/dist/ReactToastify.css";

export default function StudentRegister() {
  const CONTRACT_ADDRESS = "0x5E20F89228F7Ae1DaD1b0168e39936E56DfbD80B";
  const [values, setValues] = useState({
    teacherId: 0,
    studentId: 0,
    name: "",
    department: "",
    contact: "",
  });
  const [myContract, setMyContract] = useState(null);

  const contractABI = abi;
  let provider;
  let signer;

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

  async function connectToMetamask() {
    try {
      await window.ethereum.enable();
      return true;
    } catch (err) {
      return false;
    }
  }

  async function register() {
    let admin = await connectToMetamask();
    provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    signer = provider.getSigner();
    try {
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractABI,
        signer
      );
      setMyContract(contract);
      const address = await signer.getAddress();
      await contract.studentRegister(
        values.teacherId,
        values.studentId,
        values.name,
        values.department,
        values.contact
      );
    } catch (err) {
      alert("CONTRACT_ADDRESS not set properly!");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.teacherId === 0) {
      toast.error("Please insert the id");
      return;
    }
    if (values.studentId === 0) {
      toast.error("Please insert the id");
      return;
    }
    if (values.name === "") {
      toast.error("Please insert the name");
      return;
    }
    if (values.department === "") {
      toast.error("Please insert the department");
      return;
    }
    if (values.contact === "") {
      toast.error("Please insert the email");
      return;
    }
    if (!ValidateEmail(values.contact)) {
      toast.warning("Incorrect email.");
      return;
    }
    register();
  };

  return (
    <>
      <ToastContainer />
      <div className="flex py-20 flex-col justify-center">
        <h1 className="font-bold mb-32">Student Registration</h1>
        <div className="flex flex-col gap-5 px-96 mb-12">
          <div className="flex justify-between">
            <h3>Enter Teacher Id:</h3>
            <input
              className="border-2 border-gray-700 px-5 rounded"
              name="teacherId"
              type="number"
              value={values.teacherId}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex justify-between">
            <h3>Enter Student Id:</h3>
            <input
              className="border-2 border-gray-700 px-5 rounded"
              name="studentId"
              type="number"
              value={values.studentId}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex justify-between">
            <h3>Enter Student Name:</h3>
            <input
              className="border-2 border-gray-700 px-5 rounded"
              name="name"
              value={values.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex justify-between">
            <h3>Enter Student Department:</h3>
            <input
              className="border-2 border-gray-700 px-5 rounded"
              name="department"
              value={values.department}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex justify-between">
            <h3>Enter Student Address:</h3>
            <input
              className="border-2 border-gray-700 px-5 rounded"
              name="address"
            />
          </div>
          <div className="flex justify-between">
            <h3>Enter Student Contact:</h3>
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
