package com.employee.employeeappdemo.service;

import com.employee.employeeappdemo.model.Salary;

import java.util.List;

public interface ISalaryService {

    Salary getSalaryByYear(Long idEmployee,Integer year);

    List<Salary> getSalariesByIdEmployee(Long idEmployee);

    Salary updateSalaryByIdYear(Long idEmployee,Integer year);

    void deleteSalaryById(Long idEmployee);

    Salary addSalaryByIdYear(Long idEmployee,Integer year);

}
