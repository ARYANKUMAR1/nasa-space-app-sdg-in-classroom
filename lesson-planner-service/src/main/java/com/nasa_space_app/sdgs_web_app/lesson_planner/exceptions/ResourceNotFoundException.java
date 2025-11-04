package com.nasa_space_app.sdgs_web_app.lesson_planner.exceptions;

//created custom exception
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }

}
