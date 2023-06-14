package com.example.demo;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseControler {
    // http://localhost:8080/courses
    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return Arrays.asList(new Course(1, "Item 1", "item12"),
                new Course(2, "Item 2", "item22"));
    }

    // http://localhost:8080/courses/1
    @GetMapping("/courses/1")
    public Course getCourse1() {
        return new Course(1, "Item 1", "item12");
    }
}
