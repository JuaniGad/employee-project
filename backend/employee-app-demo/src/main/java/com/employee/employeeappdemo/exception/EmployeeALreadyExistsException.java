package com.employee.employeeappdemo.exception;

public class EmployeeALreadyExistsException extends RuntimeException{
    public EmployeeALreadyExistsException(String message){
        super(message);
    }

}
