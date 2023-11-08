import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../common/Search";
import { Link } from "react-router-dom";
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
            <th scope="col">Salaries</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employees
            .filter((st) => st.firstName.toLowerCase().includes(search))
            .map((employee, index) => (
              <tr key={employee.id}>
                <th scope="row">{employee.id}</th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.dni}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td>{employee.address}</td>
                <td>{employee.creation_DATE || "N/A"}</td>
                <td className="my-0">
                  <div className="d-flex">
                    <div className="d-inline-block mx-2">
                      <Link to={`/create-salary/${employee.id}`}>
                        <button className="btn btn-primary">
                          <FaEdit />
                        </button>
                      </Link>
                    </div>
                    <div className="d-inline-block mx-2">
                      <Link to={`/view-salaries/${employee.id}`}>
                        <button className="btn btn-success">
                          <FaEye />
                        </button>
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="d-flex">
                  <div className="d-inline-block mx-2">
                    <Link to={`/employee-profile/${employee.id}`}>
                      <button className="btn btn-info">
                        <FaEye />
                      </button>
                    </Link>
                  </div>
                  <div className="d-inline-block mx-2">
                    <Link to={`/edit-employee/${employee.id}`}>
                      <button className="btn btn-warning">
                        <FaEdit />
                      </button>
                    </Link>
                  </div>
                  <div className="d-inline-block mx-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(employee.id)}>
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default EmployeeViews;
