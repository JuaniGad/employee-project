import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    salary: "",
    address: "",
    dni: "",
  });

  const { id } = useParams();

  const { firstName, lastName, email, department, salary, address, dni } =
    employee;

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadEmployeeData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8080/employee/getEmployee/${id}`
        );
        setEmployee(result.data);
      } catch (error) {
        console.error("Error add employee:", error);
      }
    };

    loadEmployeeData(); // Llama a la función directamente
  }, [id]);

  const updateEmployee = async (e) => {
    e.preventDefault();
    console.log("Ejecutando update employee");
    await axios.put(`http://localhost:8080/employee/update/${id}`, employee);
    navigate("/view-employee");
  };

  return (
    <div className="col-sm-8 py-2 px-5">
      <h2 className="mt-5">Add Student</h2>
      <form onSubmit={(e) => updateEmployee(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={firstName}
            onChange={(e) => handleInputChange(e)}></input>
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={(e) => handleInputChange(e)}></input>
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="dni">
            DNI
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="dni"
            id="dni"
            required
            value={dni}
            onChange={(e) => handleInputChange(e)}></input>
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="address">
            Address
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="address"
            id="address"
            required
            value={address}
            onChange={(e) => handleInputChange(e)}></input>
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => handleInputChange(e)}></input>
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="department">
            Department
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            required
            value={department}
            onChange={(e) => handleInputChange(e)}></input>
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="salary">
            Salary
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="salary"
            id="salary"
            required
            value={salary}
            onChange={(e) => handleInputChange(e)}></input>
        </div>
        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/view-employee"}
              type="submit"
              className="btn btn-outline-danger btn-lg">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
