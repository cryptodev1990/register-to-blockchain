import React, { useState } from "react";
import { ethers } from "ethers";
import Auth from "../assets/auth.svg";
import { abi } from "../abi";
import Metamask from "../assets/metamask-icon.webp";

export default function Student() {
  const [values, setValues] = useState({
    teacherId: 0,
    studentId: 0,
  });
  const CONTRACT_ADDRESS = "0x5E20F89228F7Ae1DaD1b0168e39936E56DfbD80B";

  const [myContract, setMyContract] = useState(null);

  const contractABI = abi;
  let provider;
  let signer;

  async function connectToMetamask() {
    try {
      await window.ethereum.enable();
      return true;
    } catch (err) {
      return false;
    }
  }

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }))
  };

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
      console.log(address);
      await contract.studentCompleteRegister(values.teacherId, values.studentId, address);
    } catch (err) {
      alert("CONTRACT_ADDRESS not set properly!");
    }
  }

  return (
    <div className="flex flex-col items-center py-10">
      <img
        src={Auth}
        alt="auth"
        title="teacher auth"
        className="w-96 h-96 -mb-12"
      />
      <h5>
        You can enter private key of your wallet Or you connect Metamask wallet
      </h5>
      <input
        className="border-2 border-gray-700 px-5 rounded my-3"
        name="number"
        type="number"
        value={values.teacherId}
        onChange={(e) => handleChange(e)}
      />
      <input
        className="border-2 border-gray-700 px-5 rounded"
        name="number"
        type="number"
        value={values.studentId}
        onChange={(e) => handleChange(e)}
      />
      <div className="flex w-full justify-center mt-5 items-center">
        <input
          type="text"
          placeholder="Private Key"
          className="placeholder-gray-700 py-3 px-3 border-2 border-gray-700 rounded w-1/4"
        />
        <h4 className="text-blue-500 -ml-16 hover:cursor-pointer">Paste</h4>
      </div>
      <h3 className="bg-blue-500 py-2 px-12 rounded-md text-white hover:cursor-pointer mt-12">
        Continue
      </h3>
      <div className="mt-3">Or Click to connect Metamask</div>
      <div
        className="bg-yellow-600 flex py-3 px-8 gap-3 hover:cursor-pointer items-center rounded-md"
        onClick={() => register()}
      >
        <img
          src={Metamask}
          alt="metamask"
          title="metamask"
          className="w-10 h-10"
        />
        <h2>METAMASK</h2>
      </div>
    </div>
  );
}
