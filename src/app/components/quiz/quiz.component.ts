import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  score: number = null;

  constructor() { }

  handleScore(data: number) {
    this.score = data;
  }

}
