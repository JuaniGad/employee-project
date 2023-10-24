package com.employee.employeeappdemo.service;

import com.employee.employeeappdemo.model.Salary;
import com.employee.employeeappdemo.repository.SalaryRepository;

import java.util.List;

public interface ISalaryService {

    Salary getSalaryByYearByIdEmployee(Long idEmployee,Integer year);

    List<Salary> getSalariesByIdEmployee(Long idEmployee);

    Salary updateSalaryByIdYear(Long idEmployee,Integer year);

    void deleteSalaryByIdEmp(Long idEmployee);

    Salary addSalaryByIdYear(Long idEmployee,Integer year);

    Salary createSalary(Salary salary);

    Salary getSalaryById(Long id);

    void deleteSalaryById(Long id);

    Salary updateSalaryById(Salary salary,Long id);

    List<Salary> getAllSalaries();


}
