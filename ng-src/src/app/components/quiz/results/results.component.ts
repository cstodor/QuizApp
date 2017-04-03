import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
  name: String;

  constructor(
    private _quizService: QuizService,
    private router: Router) { }

  ngOnInit() {
    // Get Current Score
    this.quizScore = this._quizService.score;
  }

  registerScore() {

    // result object
    const result = {
      name: this.name,
      score: this.quizScore,
      date: new Date()
    }

    // Name is required!
    if (!this._quizService.validateName(result)) {
      console.log('Please enter your name!');
      return false;
    }

    // result object registration 
    this._quizService.registerResult(result).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/high-scores']);
      }
    },
      err => {
        console.log(err);
        return false;
      });
  }


  // Send Score to Quiz Component (parent)
  sendScore() {
    console.log("sendScore()")
    this.scoreSend.emit(this.quizScore);
  }

  ngOnDestroy() {
    console.log('RESULTS ARE DESTROYED.')
    this._quizService.quizScore(null);
    this._quizService.quizDone(false);
  }


}
