import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Admin from "./Admin/Pages/Admin";
import Addproject from "./Admin/Pages/Addproject";
import Projects from "./Admin/Pages/Project";
import EditProject from "./Admin/Pages/EditProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        <Route path="/login/admin" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add-project" element={<Addproject />}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/admin/edit-project/:id" element={<EditProject />} />

      </Routes>
    </Router>
  );
}

export default App;
