import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../services/module-service';


@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  modules = [];
  moduleId = '';
  courseId = '';

  constructor(private activatedRoute: ActivatedRoute,
              private moduleService: ModuleService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moduleId = params.mid;
      this.courseId = params.cid;
      this.moduleService.findModulesForCourse(this.courseId)
        .then(modules => {
        this.modules = modules;
      });
    });
  }
}
