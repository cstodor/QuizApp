import { Component, OnInit } from '@angular/core';

// Service
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css']
})
export class HighScoresComponent implements OnInit {

  highScores: any;

  constructor(public _quizService: QuizService) { }

  ngOnInit() {

    // Get High Scores
    this._quizService.getHighScores().subscribe(highScores => {

      // Sort Scores Descending
      highScores.results.sort(function (score1, score2) {
        if (score1.score > score2.score) {
          return -1;
        } else if (score1.score < score2.score) {
          return 1;
        } else {
          return 0;
        }
      });

      this.highScores = highScores.results;

    },
      // error
      err => {
        console.log(err);
        return false;
      }
    );

  }

}
