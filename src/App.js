import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Admin from "./components/Admin";
import Teacher from "./components/Teacher";
import StudentRegister from "./components/StudentRegister";
import Student from "./components/Student";
import ViewTeacher from "./components/ViewTeacher";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/studentregister" element={<StudentRegister />} />
        <Route path="/student" element={<Student />} />
        <Route path="/viewteacher" element={<ViewTeacher />} />
      </Routes>
    </div>
  );
}

export default App;
