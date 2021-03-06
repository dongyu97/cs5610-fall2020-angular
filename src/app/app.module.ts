import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {FormsModule} from '@angular/forms';
import {CourseService} from './services/course-service';
import {ModuleService} from './services/module-service';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabComponent } from './lesson-tab/lesson-tab.component';
import {LessonService} from './services/lesson-service';
import { QuizzesComponent } from './quizzes/quizzes.component';
import {QuizzesServiceClient} from './services/quizess-server';
import { QuizComponent } from './quiz/quiz.component';
import {QuestionsServiceClient} from './services/question-server';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';





@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService,
    QuizzesServiceClient,
    QuestionsServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
