import { Component, OnInit, DoCheck } from '@angular/core';
// Service
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-questions-answers',
  templateUrl: './questions-answers.component.html',
  styleUrls: ['./questions-answers.component.css']
})
export class QuestionsAnswersComponent implements OnInit {

  _quiz: any;
  questionIndex: number = 1;
  selectedOptions: Array<string> = [];
  activeOptions = document.getElementsByClassName('active');
  quizScore: number = 0;
  secLeft: number = this._quizService.time;

  constructor(public _quizService: QuizService) { }

  // selected options
  selected(elem: any) {
    elem.classList.toggle('active');
    this.selectedOptions.length = 0;
    for (var i = 0; i < this.activeOptions.length; i++) {
      this.selectedOptions.push(this.activeOptions[i].innerHTML);
    }
  }

  // next question function
  nextQuestion() {
    if (this.questionIndex <= this._quiz.length) {
      for (let i = this.questionIndex - 1; i < this.questionIndex; i++) {
        var selectedAnswers = String(this.selectedOptions);
        var correctAnswer = String(this._quiz[i].answer);
        if (selectedAnswers === correctAnswer) {
          this.quizScore++;
        }
        if (this.questionIndex === this._quiz.length) {
          this.calculateScore();
        }
      }
      this.questionIndex++;
      this.selectedOptions.length = 0;
    }
  }

  calculateScore() {
    this.quizScore = (this.quizScore / this._quiz.length) * 100;
    this._quizService.quizDone(true);
    this._quizService.quizScore(this.quizScore);
  }

  ngOnInit() {
    // get quiz data
    this._quizService.getQuizData().subscribe(quiz => {
      this._quiz = quiz.questions;
    },
      // error
      err => {
        console.log(err);
        return false;
      }
    );
  }

  ngDoCheck() {
    // get timer value
    this.secLeft = this._quizService.time;
    if (this.secLeft === 0) {
      this._quizService.quizScore(this.quizScore * 10)
    }
  }

}
