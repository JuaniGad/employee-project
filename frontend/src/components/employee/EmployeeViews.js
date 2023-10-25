import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const EmployeeViews = () => {
  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Loading employees...");
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get(`http://localhost:8080/employee`, {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setEmployees(result.data);
    }
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/employee/delete/${id}`);
    loadEmployees();
  };

  return (
    <section className="">
      <Search search={search} setSearch={setSearch} />
      <table className="table table-hover table-bordered shadow">
        <thead>
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">D.N.I</th>
            <th scope="col">E-mail</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
            <th scope="col">Address</th>
            <th scope="col">Creation Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employees
            .filter((st) => st.firstName.toLowerCase().includes(search))
            .map((employee, index) => (
              <tr key={employee.id}>
                <th scope="row" key={index}>
                  {employee.id}
                </th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.dni}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td>{employee.address}</td>
                <td>{employee.creation_DATE}</td>
                <td className="d-flex my-0">
                  <button className="btn btn-info mx-2">
                    <FaEye />
                  </button>
                  <button className="btn btn-warning mx-2">
                    <FaEdit />
                  </button>
                  <button className="btn btn-danger mx-2">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default EmployeeViews;