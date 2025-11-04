package com.nasa_space_app.sdgs_web_app.lesson_planner.services;

import com.nasa_space_app.sdgs_web_app.lesson_planner.dto.LessonDTO;
import com.nasa_space_app.sdgs_web_app.lesson_planner.entities.LessonPlan;
import com.nasa_space_app.sdgs_web_app.lesson_planner.exceptions.ResourceNotFoundException;
import com.nasa_space_app.sdgs_web_app.lesson_planner.repositories.LessonPlanRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class LessonPlanServiceImpl implements LessonPlanService {


    private final LessonPlanRepository lessonPlanRepository;

    private final ModelMapper modelMapper;

    @Override
    public List<LessonDTO> getAllLessonPlans() {
        return lessonPlanRepository
                .findAll()
                .stream()
                .map(lessonPlan -> modelMapper.map(lessonPlan, LessonDTO.class))
                .collect(Collectors.toUnmodifiableList());
    }

    @Override
    public LessonDTO createNewLessonPlan(LessonDTO lessonDTO) {
        LessonPlan lessonPlan = modelMapper.map(lessonDTO, LessonPlan.class);
        return modelMapper.map(lessonPlanRepository.save(lessonPlan), LessonDTO.class);
    }

    @Override
    public LessonDTO getLessonPlanById(Long id) {
        LessonPlan lessonPlan = lessonPlanRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson not found with id : " + id));
        return modelMapper.map(lessonPlan, LessonDTO.class);
    }


    @Override
    public LessonDTO updateLessonPlan(LessonDTO lessonDTO, Long id) {
        LessonPlan oldLessonPlan = lessonPlanRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Lesson not found with id : " + id));
        lessonDTO.setId(id);
        modelMapper.map(lessonDTO, oldLessonPlan);
        LessonPlan savedLessonPlan = lessonPlanRepository.save(oldLessonPlan);
        return modelMapper.map(savedLessonPlan, LessonDTO.class);
    }

    @Override
    public void deleteLessonPlanById(Long id) {
        lessonPlanRepository.deleteById(id);
    }




//    public List<LessonPlan> getAllLessonPlans() {
//        return lessonPlanRepository.findAll();
//    }
//
//    public LessonPlan getLessonPlanById(Long id) {
//        return lessonPlanRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("LessonPlan not found"));
//    }
//
//    public LessonPlan createLessonPlan(LessonPlan lessonPlan) {
//        return lessonPlanRepository.save(lessonPlan);
//    }
//
//    //changing name deleteLessonPlanById
//    public void deleteLessonPlanById(Long id) {
//        lessonPlanRepository.deleteById(id);
//    }
//
//    public LessonPlan createNewLessonPlan(LessonPlan lessonPlan) {
//    }
//
//    public LessonPlan updateLessonPlan(LessonPlan lessonPlan, Long id) {
//    }
}
