import {Injectable} from '@angular/core';

const url = 'http://localhost:3000/api/quizzes';
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`${url}/${qid}/questions`)
      .then(response => response.json())
}
