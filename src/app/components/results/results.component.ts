import { Component, OnInit } from '@angular/core';

// Service 
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [QuizService]
})
export class ResultsComponent implements OnInit {

  score: number;

  constructor(private _quizService: QuizService) { }

  ngOnInit() {
    this.score = this._quizService.getQuizScore();
  }

}
