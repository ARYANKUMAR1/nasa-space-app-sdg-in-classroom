package com.nasa_space_app.sdgs_web_app.lesson_planner.repositories;


import com.nasa_space_app.sdgs_web_app.lesson_planner.entities.LessonPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonPlanRepository extends JpaRepository<LessonPlan, Long> {
}
