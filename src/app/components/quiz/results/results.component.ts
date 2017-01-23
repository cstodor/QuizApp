import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

// Service
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  quizScore: number = null;
  @Output() scoreSend = new EventEmitter<number>();

  constructor(private _quizService: QuizService) { }

  ngOnInit() {
    // Get Score from QuizService
    this.quizScore = this._quizService.score;
  }

  // Send Score to Quiz Component (parent)
  sendScore() {
    this.scoreSend.emit(this.quizScore);
  }

  ngOnDestroy() {
    console.log('RESULTS DESTROYED, Score & Boolean Nulled.')
    this._quizService.quizScore(null);
    this._quizService.quizDone(false);
  }


}
