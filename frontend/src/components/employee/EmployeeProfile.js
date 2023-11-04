import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeProfile = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    salary: "",
    address: "",
    dni: "",
  });
  const loadEmployee = async () => {
    const result = await axios.get(
      `http://localhost:8080/employee/getEmployee/${id}`
    );
    setEmployee(result.data);
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">
                  {`${employee.firstName} ${employee.lastName}`}
                </h5>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-outline-primary">
                    Call
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning ms-1">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
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
                    <h5 className="mb-0">DNI</h5>
                  </div>
                </div>

                <div className="col-sm-9">
                  <p className="text-muted mb-0">{employee.dni}</p>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Address</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{employee.address}</p>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Email</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{employee.email}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Department</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{employee.department}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Salary</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{employee.salary}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Salaries</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{employee.salaries}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">Creation Date</h5>
                    </div>

                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {employee.creation_DATE}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-sm-2">
            <Link
              to={"/view-employee"}
              type="submit"
              className="btn btn-outline-danger btn-lg bg-red">
              Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeProfile;
