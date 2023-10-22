package com.employee.employeeappdemo.exception;

public class SalariesNotFoundException extends RuntimeException{
    public SalariesNotFoundException(String message) {
        super(message);
    }
}
