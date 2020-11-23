import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../services/lesson-service';

@Component({
  selector: 'app-lesson-tab',
  templateUrl: './lesson-tab.component.html',
  styleUrls: ['./lesson-tab.component.css']
})
export class LessonTabComponent implements OnInit {
  lessons = [];
  moduleId = '';
  courseId = '';
  lessonId = '';


  constructor(private activatedRoute: ActivatedRoute,
              private lessonService: LessonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moduleId = params.mid;
      this.courseId = params.cid;
      this.lessonId = params.lid;
      this.lessonService.findLessonsForModule(this.moduleId).then(lessons => {
        this.lessons = lessons;
      });
    });
  }

}
