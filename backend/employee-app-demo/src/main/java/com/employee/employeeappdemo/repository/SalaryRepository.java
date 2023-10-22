package com.employee.employeeappdemo.repository;

import com.employee.employeeappdemo.model.Employee;
import com.employee.employeeappdemo.model.Salary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SalaryRepository extends JpaRepository <Salary,Long>{

}
