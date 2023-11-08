package com.employee.employeeappdemo.controller;


import com.employee.employeeappdemo.model.Employee;
import com.employee.employeeappdemo.model.Salary;
import com.employee.employeeappdemo.service.IEmployeeService;
import com.employee.employeeappdemo.service.ISalaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000/")
@RestController
@RequiredArgsConstructor
@RequestMapping("/employee")
public class EmployeeController {

    private final IEmployeeService employeeService;
    private final ISalaryService iSalaryService;

    @GetMapping()
    public ResponseEntity<List<Employee> >getAll(){
        return new ResponseEntity<>(employeeService.getEmployee(),HttpStatus.FOUND);
    }

    @GetMapping("/getEmployee/{id}")
    public Employee getEmployeeId(@PathVariable Long id){
        return employeeService.getEmployeeById(id);
    }

    @PostMapping()
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeService.addEmployee(employee);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable Long id){

        employeeService.deleteEmployeeById(id);

        List<Salary> employeeSalaries=iSalaryService.getSalariesByIdEmployee(id);

        Integer cant=employeeSalaries.size();

        if(cant>0){
            for( Salary salary:employeeSalaries){
                iSalaryService.deleteSalaryById(salary.getId());
            }
        }

    }

    @PutMapping("/update/{id}")
    public Employee updateEmployee(@RequestBody Employee employee,@PathVariable Long id){
        return employeeService.updateEmployeeBy(employee,id);
    }
}
