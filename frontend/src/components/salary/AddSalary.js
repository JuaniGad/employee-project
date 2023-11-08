import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddSalary = () => {
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

  const idEmployee = id;

  const [salary, setSalary] = useState({
    january: "",
    february: "",
    march: "",
    april: "",
    may: "",
    june: "",
    july: "",
    august: "",
    september: "",
    october: "",
    november: "",
    december: "",
    idEmployee,
    year: "",
  });

  const {
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december,
    year,
  } = salary;

  const handleInputChange = (e) => {
    setSalary({ ...salary, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadEmployeeData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8080/employee/getEmployee/${id}`
        );
        setEmployee(result.data);
      } catch (error) {
        console.error("Error al cargar el estudiante:", error);
      }
    };

    loadEmployeeData(); // Llama a la función directamente
  }, [id]);

  const updateEmployee = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/salary/`, salary);

    navigate("/view-employee");
  };

  return (
    <div className="col-sm-8 py-2 px-5">
      <h2 className="mt-5">Add Salary</h2>
      <form onSubmit={(e) => updateEmployee(e)}>
        <hr />

        <div className="row">
          <div className="col-sm-3">
            <h5 className="mb-0">First Name</h5>
          </div>

          <div className="col-sm-9">
            <p className="text-muted mb-0">{employee.firstName}</p>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h5 className="mb-0">Last Name</h5>
          </div>

          <div className="col-sm-9">
            <p className="text-muted mb-0">{employee.lastName}</p>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-sm-3">
            <h5 className="mb-0">D.N.I</h5>
          </div>

          <div className="col-sm-9">
            <p className="text-muted mb-0">{employee.dni}</p>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-sm-3">new actualizations with salaries
            <h5 className="mb-0">ID:</h5>
          </div>

          <div className="col-sm-9">
            <p className="text-muted mb-0">
              {employee.id}
            </p>
          </div>
        </div>
        <hr />
        <div className="row g-2">
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="year">
              Year
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control"
              type="text"
              name="year"
              id="year"
              required
              value={year}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-md-2">
            <label className="input-group-text" htmlFor="january">
              January
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control"
              type="text"
              name="january"
              id="january"
              required
              value={january}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <div className="col-md-2">
            <label className="input-group-text" htmlFor="february">
              February
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="february"
              id="february"
              required
              value={february}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="march">
              March
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="march"
              id="march"
              required
              value={march}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="april">
              April
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="april"
              id="april"
              required
              value={april}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="may">
              May
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="may"
              id="may"
              required
              value={may}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="june">
              June
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="june"
              id="june"
              required
              value={june}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="july">
              July
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="july"
              id="july"
              required
              value={july}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="august">
              August
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="august"
              id="august"
              required
              value={august}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="september">
              September
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="september"
              id="september"
              required
              value={september}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="october">
              October
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="october"
              id="october"
              required
              value={october}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="november">
              November
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="november"
              id="november"
              required
              value={november}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
          <div className="col-md-2">
            <label className="input-group-text" htmlFor="december">
              December
            </label>
          </div>
          <div className="col-md-9">
            <input
              className="form-control col-sm-6"
              type="text"
              name="december"
              id="december"
              required
              value={december}
              onChange={(e) => handleInputChange(e)}></input>
          </div>
        </div>
        <div className="mt-3">
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
        </div>
      </form>
    </div>
  );
};

export default AddSalary;
