package com.nasa_space_app.sdgs_web_app.lesson_planner.exceptions;

import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

//tweaked

//Basically a data class in which we have all these things, so that we can tell some more info about our errors we are getting
@Data
public class ApiError {

    private LocalDateTime timeStamp;
    private String error;
//    private String details;
    private HttpStatus statusCode;

    public ApiError() {
        this.timeStamp = LocalDateTime.now();
    }

    public ApiError(String error, HttpStatus statusCode) {
        this();
        this.error = error;
        this.statusCode = statusCode;
    }
}
