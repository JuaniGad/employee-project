package com.employee.employeeappdemo.repository;

import com.employee.employeeappdemo.model.Salary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalaryRepository extends JpaRepository <Salary,Long>{

    List<Salary> findSalaryByIdEmployee(Long idEmployee);


}
