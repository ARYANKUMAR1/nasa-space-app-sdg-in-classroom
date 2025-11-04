package com.nasa_space_app.sdgs_web_app.lesson_planner.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
@Table(name = "lectures")
public class LessonPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Integer duration;

    @Column(nullable = false)
    private String link;

    @Column(nullable = false)
    private LocalDate lectureDate;

    @Column(nullable = false)
    private LocalTime lectureTime;

    @Column(nullable = false)
    private String lectureBy;

    @Column(nullable = false)
    private String themeLink;
}
