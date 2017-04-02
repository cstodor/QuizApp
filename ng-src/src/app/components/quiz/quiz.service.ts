import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  isQuizDone: boolean = false;
  score: number = null;

  constructor(private http: Http) { }

  // 5. Get Quiz Questons and Answers
  getQuizData() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:5000/api/quiz', { headers: headers }) // update url on deployment
      .map(res => res.json());
  }

  quizDone(data: boolean) {
    this.isQuizDone = data;
  }
  quizScore(data: number) {
    this.score = data;
  }

}
