package com.employee.employeeappdemo.service;

import com.employee.employeeappdemo.exception.EmployeeALreadyExistsException;
import com.employee.employeeappdemo.exception.EmployeeNotFoundException;
import com.employee.employeeappdemo.model.Employee;
import com.employee.employeeappdemo.repository.EmployeeRepository;
import com.employee.employeeappdemo.repository.SalaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService implements IEmployeeService{

    private final EmployeeRepository employeeRepository;

    private final SalaryRepository salaryRepository;
    @Override
    public Employee addEmployee(Employee employee) {

        if (employeeAlreadyExists(employee.getEmail())) {
        throw new EmployeeALreadyExistsException(employee.getEmail()+"already exists");
        }
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getEmployee() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee updateEmployeeBy(Employee employee, Long id) {

        return employeeRepository.findById(id).map(emp->{
            emp.setFirstName(employee.getFirstName());
            emp.setLastName(employee.getLastName());
            emp.setEmail(employee.getEmail());
            emp.setDepartment(employee.getDepartment());
            emp.setAddress(employee.getAddress());
            emp.setSalary(employee.getSalary());
            emp.setDni(employee.getDni());

            return employeeRepository.save(emp);

        }).orElseThrow(()->new EmployeeNotFoundException("This employee could not be found"));
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElseThrow(()->new  EmployeeNotFoundException("Sory , employee not found"));
    }

    @Override
    public void deleteEmployeeById(Long id) {

        if(!employeeRepository.existsById(id)){

            throw new EmployeeNotFoundException("Sory , employee not found");

        }



        employeeRepository.deleteById(id);
    }

    private boolean employeeAlreadyExists(String email) {
        return employeeRepository.findByEmail(email).isPresent();
    }
}
