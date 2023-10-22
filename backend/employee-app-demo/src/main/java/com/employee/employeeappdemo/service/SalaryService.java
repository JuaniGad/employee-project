package com.employee.employeeappdemo.service;

import com.employee.employeeappdemo.exception.SalariesNotFoundException;
import com.employee.employeeappdemo.model.Salary;
import com.employee.employeeappdemo.repository.SalaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SalaryService implements ISalaryService{

    @Autowired
    private final SalaryRepository salaryRepository;
    @Override
    public Salary getSalaryByYear(Long id, Integer year) {
        return null;
    }
    @Override
    public List<Salary> getSalariesByIdEmployee(Long idEmployee) {

        return null;
    }
    @Override
    public Salary updateSalaryByIdYear(Long idEmployee, Integer year) {
        return null;
    }

    @Override
    public void deleteSalaryById(Long idEmployee) {

    }
    @Override
    public Salary addSalaryByIdYear(Long id, Integer year) {
        return null;
    }
}
