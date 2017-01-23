import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  isQuizDone: boolean = false;
  score: number = null;
  constructor() { }

  quizDone(data: boolean) {
    this.isQuizDone = data;
  }
  quizScore(data: number) {
    this.score = data;
  }

}
