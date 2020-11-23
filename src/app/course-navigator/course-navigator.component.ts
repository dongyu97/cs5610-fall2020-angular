import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course-service';
import {any} from 'codelyzer/util/function';
import {ModuleService} from '../services/module-service';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  constructor(
    private courseService: CourseService,
    private moduleService: ModuleService
  ) { }

  courses = [
    {
      _id: '',
      title:'',
      editing:false
    }
    ]
  modules=[]
  selectedCourse = {
    title: ''
  }

  createCourse = () =>
    this.courseService.createCourse()
      .then(course => this.courses.push(course))

  deleteCourse = (course: any) =>
    this.courseService.deleteCourse(course._id)
      .then(status => this.courses.filter(c => c._id!=course._id))

  editCourse = (course: any) =>
    course.editing=true
  saveCourse =(course :any)=>{
    course.editing=false
    this.courseService.updateCourse(course)
      .then(status => course.editing=false)
  }
  selectCourse = (course: any)=>{
    this.selectedCourse=course;
    this.moduleService.findModulesForCourse(course._id)
      .then(modules => this.modules=modules);
  }




  ngOnInit(): void {
    this.courseService.findAllCourses()
      .then(courses => this.courses=courses)
  }

}
