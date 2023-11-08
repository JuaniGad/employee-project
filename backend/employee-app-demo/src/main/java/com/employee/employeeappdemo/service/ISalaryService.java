package com.employee.employeeappdemo.service;

import com.employee.employeeappdemo.model.Salary;

import java.util.List;

public interface ISalaryService {

    List<Salary> getSalariesByIdEmployee(Long idEmployee);


    Salary createSalary(Salary salary);

    Salary getSalaryById(Long id);

    void deleteSalaryById(Long id);

    Salary updateSalaryById(Salary salary,Long id);

    List<Salary> getAllSalaries();


}
