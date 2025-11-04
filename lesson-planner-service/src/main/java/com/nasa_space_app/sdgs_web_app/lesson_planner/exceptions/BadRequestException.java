package com.nasa_space_app.sdgs_web_app.lesson_planner.exceptions;

//custom exception
public class BadRequestException extends RuntimeException {
    public BadRequestException(String message) {
        super(message);
    }

}
