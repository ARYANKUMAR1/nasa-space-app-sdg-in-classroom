package com.nasa_space_app.sdgs_web_app.lesson_planner.services;

import com.nasa_space_app.sdgs_web_app.lesson_planner.dto.LessonDTO;

import java.util.List;

public interface LessonPlanService {
    List<LessonDTO> getAllLessonPlans();

    LessonDTO createNewLessonPlan(LessonDTO lessonDTO);

    LessonDTO getLessonPlanById(Long id);

    LessonDTO updateLessonPlan(LessonDTO lessonDTO, Long id);

    void deleteLessonPlanById(Long id);
}
