import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const routes: Routes = [
  {path: '', component: CourseTableComponent},
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'courses/:cid/modules', component: CourseViewerComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
