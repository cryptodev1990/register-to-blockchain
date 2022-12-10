import { ethers } from "ethers";
import React, {useState, useEffect} from "react";
import { abi } from "../abi";

export default function ViewTeacher() {
  const CONTRACT_ADDRESS = "0x5E20F89228F7Ae1DaD1b0168e39936E56DfbD80B";
  const [teachers, setTeachers] = useState([]);
  const [myContract, setMyContract] = useState(null);

  const contractABI = abi;
  let provider;
  let signer;

  async function getTeachers() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    try {
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        contractABI,
        signer
      );
      setMyContract(contract);
      const teacherList = await contract.getTeachers();
      setTeachers(teacherList);
      console.log(teachers);
    } catch(e) {
      alert("Some Errors!");
    }
  }

  useEffect(() => {
    getTeachers();
  },[])
  return (
    <div>

    </div>
  )
}