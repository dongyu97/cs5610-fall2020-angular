import {Injectable} from '@angular/core';

const url = 'http://localhost:3000/api/quizzes';
@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch(url)
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`${url}/${qid}`)
      .then(response => response.json())
  findAttemptsForQuiz = (qId) =>
    fetch(`${url}/${qId}/attempts`)
      .then(response => response.json())
}
