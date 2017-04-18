import { Component, DoCheck } from '@angular/core';

// Service
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  score: number = null;
  isQuizDone = false;

  constructor(public _quizService: QuizService) { }

  // handleScore() triggered by sendScore Event, sent from Results Component
  handleScore(data: number) {
    this.score = data;
  }
  // Checks if Quiz is Finished
  ngDoCheck() {
    if (this._quizService.isQuizDone === true) {
      this.score = this._quizService.score;
      this.isQuizDone = this._quizService.isQuizDone;
    }
  }
}
