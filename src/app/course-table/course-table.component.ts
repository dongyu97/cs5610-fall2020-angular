import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../services/course-service';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  courses = [];
  courseId = '';


  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.cid;

      this.courseService.findAllCourses()
        .then(courses => this.courses = courses);
    });
  }
}
