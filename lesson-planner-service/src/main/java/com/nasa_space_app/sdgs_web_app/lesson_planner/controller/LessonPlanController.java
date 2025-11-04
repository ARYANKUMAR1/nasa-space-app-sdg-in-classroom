package com.nasa_space_app.sdgs_web_app.lesson_planner.controller;

import com.nasa_space_app.sdgs_web_app.lesson_planner.dto.LessonDTO;
import com.nasa_space_app.sdgs_web_app.lesson_planner.services.LessonPlanServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lesson-plan")
//@CrossOrigin(origins = {"http://localhost:3000", "https://sdg-in-classroom-873777657647.asia-south1.run.app"})
@RequiredArgsConstructor
public class LessonPlanController {

    private final LessonPlanServiceImpl lessonPlanService;

    @GetMapping
    public List<LessonDTO> getAllLessonPlans() {
        return lessonPlanService.getAllLessonPlans();
    }

    @GetMapping("/{id}")
    public LessonDTO getLessonPlanById(@PathVariable Long id) {
        return lessonPlanService.getLessonPlanById(id);
    }

    @PostMapping
    public LessonDTO createNewLessonPlan(@RequestBody LessonDTO lessonDTO) {
        return lessonPlanService.createNewLessonPlan(lessonDTO);
    }

    @PutMapping("/{id}")
    public LessonDTO updateLessonPlan(@RequestBody LessonDTO lessonDTO, @PathVariable Long id) {
        return lessonPlanService.updateLessonPlan(lessonDTO, id);
    }

    @DeleteMapping("/{id}")
    public void deleteLessonPlan(@PathVariable Long id) {
        lessonPlanService.deleteLessonPlanById(id);
    }

}
