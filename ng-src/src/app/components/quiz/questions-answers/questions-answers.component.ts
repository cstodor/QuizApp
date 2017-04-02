import { Component, OnInit, DoCheck } from '@angular/core';
import { Http, Response } from '@angular/http'; // required for getting products from JSON file
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // required by the .map method

// Data
// import { IQuiz } from 'api/qaa';
// Service
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-questions-answers',
  templateUrl: './questions-answers.component.html',
  styleUrls: ['./questions-answers.component.css']
})
export class QuestionsAnswersComponent implements OnInit {

  // private _quizQAUrl = 'src/api/qaa.json';
  _quiz: Object;
  private _answers: Array<string> = [];

  errorMessage: string;
  questionIndex: number = 1;
  selectedOptions: Array<string> = [];
  activeOptions = document.getElementsByClassName('active');
  quizScore: number = 0;

  constructor(
    private _http: Http,
    private _quizService: QuizService) { }

  // get the list of the questions and answers as an observable
  // getQAAList(): Observable<IQuiz[]> {
  //   return this._http.get(this._quizQAUrl)
  //     .map(response => <IQuiz[]>response.json().quizData)
  // }

  // selected options
  selected(elem: any) {
    elem.classList.toggle('active'); // toggles "active" CSS class on elements that the user clicks on
    this.selectedOptions.length = 0;
    for (var i = 0; i < this.activeOptions.length; i++) {
      this.selectedOptions.push(this.activeOptions[i].innerHTML);
    }
  }

  // next question function
  nextQuestion() {
    if (this.questionIndex <= 10/*this._quiz.length*/) {
      for (var i = this.questionIndex - 1; i < this.questionIndex; i++) {
        var selectedAnswers = String(this.selectedOptions);
        //var correctAnswer = String(this._quiz[i].answer);
        if (selectedAnswers /*=== correctAnswer*/) {
          this.quizScore++;
        }
        if (this.questionIndex === 10/*this._quiz.length*/) {
          this.calculateScore();
        }
      }
      this.questionIndex++;
      this.selectedOptions.length = 0;
    }
  }

  calculateScore() {
    this.quizScore = (this.quizScore / 10/*this._quiz.length*/) * 100;
    this._quizService.quizDone(true);
    this._quizService.quizScore(this.quizScore)
  }

  ngOnInit() {
    // this.getQAAList()
    //   .subscribe(
    //   quiz => this._quiz = quiz, // set our local _quiz array equal to the IQuiz[] data which arrive from our data stream
    //   error => this.errorMessage = <any>error);
    this._quizService.getQuizData().subscribe(quiz => {
      this._quiz = quiz.questions;
    },
      // observables can also return an error
      err => {
        console.log(err);
        return false;
      }
    );
  }

  ngDoCheck() {
    // console.log('Score Sent');
    this._quizService.quizScore(this.quizScore * 10)
  }
}
