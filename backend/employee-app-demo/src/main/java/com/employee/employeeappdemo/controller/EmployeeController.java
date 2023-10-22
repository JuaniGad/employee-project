package com.employee.employeeappdemo.controller;


import com.employee.employeeappdemo.model.Employee;
import com.employee.employeeappdemo.service.IEmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/employee")
public class EmployeeController {

    private final IEmployeeService employeeService;

    @GetMapping("/")
    public List<Employee> getAll(){
        return employeeService.getEmployee();
    }

    @GetMapping("/getEmployee/{id}")
    public Employee getEmployeeId(@PathVariable Long id){
        return employeeService.getEmployeeById(id);
    }

    @PostMapping("/")
    public Employee addEmployee(@RequestBody Employee employee){
        return employeeService.addEmployee(employee);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEmployee(@PathVariable Long id){
    employeeService.deleteEmployeeById(id);
    }

    @PutMapping("/update/{id}")
    public Employee updateEmployee(@RequestBody Employee employee,@PathVariable Long id){
        return employeeService.updateEmployeeBy(employee,id);
    }
}
