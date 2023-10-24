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
    public Salary getSalaryByYearByIdEmployee(Long idEmployee, Integer year) {
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
    public void deleteSalaryByIdEmp(Long idEmployee) {

    }
    @Override
    public Salary addSalaryByIdYear(Long idEmployee, Integer year) {
        return null;
    }


    //Salary methods with salarary ID
    @Override
    public void deleteSalaryById(Long id) {


        if(salaryRepository.existsById(id)){
            salaryRepository.deleteById(id);
        }else{
            throw new SalariesNotFoundException("Sorry, the salary that was associated with this ID was not found.");
        }

    }

    @Override
    public Salary updateSalaryById(Salary salary,Long id) {

        return salaryRepository.findById(id).map((sl->{
            sl.setYear(salary.getYear());
            sl.setJanuary(salary.getJanuary());
            sl.setFebruary(salary.getFebruary());
            sl.setMarch(salary.getMarch());
            sl.setApril(salary.getApril());
            sl.setMay(salary.getMay());
            sl.setJune(salary.getJune());
            sl.setJuly(salary.getJuly());
            sl.setAugust(salary.getAugust());
            sl.setSeptember(salary.getSeptember());
            sl.setOctober(salary.getOctober());
            sl.setNovember(salary.getNovember());
            sl.setDecember(salary.getDecember());
            return  salaryRepository.save(sl);
        })).orElseThrow(()->new SalariesNotFoundException("Sorry, the salary that was associated with this ID was not found."));
    }

    @Override
    public List<Salary> getAllSalaries() {
        return salaryRepository.findAll();
    }

    @Override
    public Salary createSalary(Salary salary) {
        return salaryRepository.save(salary);
    }

    @Override
    public Salary getSalaryById(Long id) {
        return salaryRepository.findById(id).orElseThrow(()->new SalariesNotFoundException("Sorry, the salary that was associated with this ID was not found."));
    }






}
