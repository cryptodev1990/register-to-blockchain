export const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "id",
        "type": "uint32"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "department",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      }
    ],
    "name": "adminRegister",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "teacherId",
        "type": "uint32"
      }
    ],
    "name": "getStudents",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "teacherId",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "studentId",
            "type": "uint32"
          },
          {
            "internalType": "string",
            "name": "studentName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "studentDepartment",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "studentEmail",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "studentAddress",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isExist",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isComplete",
            "type": "bool"
          }
        ],
        "internalType": "struct Register.Student[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTeachers",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "teacherId",
            "type": "uint32"
          },
          {
            "internalType": "string",
            "name": "teacherName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "teacherDepartment",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "teacherEmail",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "teacherAddress",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isExist",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isComplete",
            "type": "bool"
          }
        ],
        "internalType": "struct Register.Teacher[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "teacherId",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "studentId",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "newAddress",
        "type": "address"
      }
    ],
    "name": "studentCompleteRegister",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "teacherId",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "studentId",
        "type": "uint32"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "department",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "email",
        "type": "string"
      }
    ],
    "name": "studentRegister",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "id",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "newAddress",
        "type": "address"
      }
    ],
    "name": "teacherCompleteRegister",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]