package com.nasa_space_app.sdgs_web_app.lesson_planner.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LessonDTO {

    private Long id;
    private String title;
    private String description;
    private Integer duration;
    private String link;
    private LocalDate lectureDate;
    private LocalTime lectureTime;
    private String lectureBy;
    private String themeLink;
}
