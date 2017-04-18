import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// Service
import { QuizService } from '../quiz.service';
import { Auth } from "../../auth/auth.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  quizScore: number = null;
  @Output() scoreSend = new EventEmitter<number>();
  profile: any;

  constructor(
    public _quizService: QuizService,
    public router: Router,
    public auth: Auth
  ) { }

  ngOnInit() {
    // Get Current Score
    this.quizScore = this._quizService.score;
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }

  registerScore() {

    // result object
    const result = {
      name: this.profile.given_name,
      score: this.quizScore,
      date: new Date()
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
    console.log("sendScore()");
    this.scoreSend.emit(this.quizScore);
  }

  ngOnDestroy() {
    console.log('RESULTS ARE DESTROYED.')
    this._quizService.quizScore(null);
    this._quizService.quizDone(false);
  }

}
