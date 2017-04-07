import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizService {

  isQuizDone: boolean = false;
  score: number = null;
  time: number;

  constructor(private http: Http) { }

  // Get Quiz Questons and Answers
  getQuizData() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:5000/api/quiz', { headers: headers }) // update url on deployment
      .map(res => res.json());
  }
  
  // Validate Name
  validateName(result) {
    if (result.name === undefined || result.name === "") {
      return false;
    } else {
      return true;
    }
  }

  // Save Quiz Results
  registerResult(result) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:5000/api/scores/save', result, { headers: headers }) // update url on deployment
      .map(res => res.json());
  }

  // Get High Scores
  getHighScores() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:5000/api/scores/high-scores', { headers: headers }) // update url on deployment
      .map(res => res.json());
  }

  quizDone(data: boolean) {
    this.isQuizDone = data;
  }
  quizScore(data: number) {
    this.score = data;
  }
  timeLeft(data: number) {
    this.time = data;
  }
}
