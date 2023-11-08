import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ViewSalaries = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dni: "",
  });

  const { id } = useParams();

  const [salaries, setSalary] = useState([]);

  useEffect(() => {
    loadSalariesData();
  }, []);

  const loadSalariesData = async () => {
    const result = await axios.get(
      `http://localhost:8080/salary/allSalaries/${id}`
    );
    setSalary(result.data);
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(
      `http://localhost:8080/employee/getEmployee/${id}`
    );
    setEmployee(result.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/salary/delete/${id}`);
    loadSalariesData();
  };

  return (
    <section className="">
      <table className="table table-hover table-bordered shadow">
        <thead>
          <tr className="text-center">
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">D.N.I</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.dni}</td>
          </tr>
        </tbody>
      </table>

      <table className="table table-hover table-bordered shadow">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">January</th>
            <th scope="col">February</th>
            <th scope="col">March</th>
            <th scope="col">April</th>
            <th scope="col">May</th>
            <th scope="col">June</th>
            <th scope="col">July</th>
            <th scope="col">August</th>
            <th scope="col">September</th>
            <th scope="col">October</th>
            <th scope="col">November</th>
            <th scope="col">December</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {salaries.map((salary, index) => (
            <tr key={salary.id}>
              <th scope="row" key={index}>
                {salary.year}
              </th>
              <td>${salary.january}</td>

              <td>${salary.february}</td>

              <td>${salary.march}</td>

              <td>${salary.april}</td>

              <td>${salary.may}</td>

              <td>${salary.june}</td>

              <td>${salary.july}</td>

              <td>${salary.august}</td>

              <td>${salary.september}</td>

              <td>${salary.october}</td>

              <td>${salary.november}</td>

              <td>${salary.december}</td>
              <td className="d-flex my-0">
                <Link to={`/edit-salary/${salary.id}`}>
                  <button className="btn btn-warning mx-2">
                    <FaEdit />
                  </button>
                </Link>

                <button
                  className="btn btn-danger mx-2"
                  onClick={() => handleDelete(salary.id)}>
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

export default ViewSalaries;
