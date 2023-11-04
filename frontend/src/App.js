import "./App.css";
import Home from "./Home";
import EmployeeViews from "./components/employee/EmployeeViews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/employee/AddEmployee";
import EditEmployee from "./components/employee/EditEmployee";
import EmployeeProfile from "./components/employee/EmployeeProfile";
import NavBar from "./components/common/NavBar";
import AddSalary from "./components/salary/AddSalary";
function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/view-employee"
            element={<EmployeeViews />}></Route>
          <Route exact path="/add-employee" element={<AddEmployee />}></Route>
          <Route
            exact
            path="/edit-employee/:id"
            element={<EditEmployee />}></Route>
          <Route
            exact
            path="/employee-profile/:id"
            element={<EmployeeProfile />}></Route>

          <Route
            exact
            path="/create-salary/:id"
            element={<AddSalary />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
