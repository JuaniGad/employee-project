package com.employee.employeeappdemo.service;

import com.employee.employeeappdemo.model.Employee;

import java.util.List;


public interface IEmployeeService {

    Employee addEmployee(Employee employee);
    List<Employee> getEmployee();

    Employee updateEmployeeBy(Employee employee,Long id);

    Employee getEmployeeById(Long id);

    void deleteEmployeeById(Long id);

}
