import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsServiceClient} from '../services/question-server';
import { Location } from '@angular/common';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private questionsServiceClient: QuestionsServiceClient,
              private route: ActivatedRoute, private location: Location) {
  }

  quizId = '';
  questions = [];




  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.questionsServiceClient.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
    });
  }
}
