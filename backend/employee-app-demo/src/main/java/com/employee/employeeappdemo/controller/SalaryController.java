package com.employee.employeeappdemo.controller;

import com.employee.employeeappdemo.model.Salary;
import com.employee.employeeappdemo.service.ISalaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/salary")
public class SalaryController {

    private final ISalaryService iSalaryService;

    @GetMapping("/")
    public List<Salary> getAll(){
        return  iSalaryService.getAllSalaries();
    }

    @PostMapping ("/")
    public Salary addSalary(@RequestBody Salary salary){
        return iSalaryService.createSalary(salary);
    }

    @GetMapping ("/{id}")
    public Salary getSalaryById(@PathVariable Long id){
        return iSalaryService.getSalaryById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteSalaryById(@PathVariable Long id){
        iSalaryService.deleteSalaryById(id);
    }

    @PutMapping("/update/{id}")
    public Salary updateById(@RequestBody Salary salary,@PathVariable Long id){
        return iSalaryService.updateSalaryById(salary,id);
    }

}
