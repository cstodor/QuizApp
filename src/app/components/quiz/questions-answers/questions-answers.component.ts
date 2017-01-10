import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'; // required for getting products from JSON file
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // required by the .map method
import { Router } from '@angular/router';

// Data
import { IQuiz } from '../../../../api/qaa';

@Component({
  selector: 'app-questions-answers',
  templateUrl: './questions-answers.component.html',
  styleUrls: ['./questions-answers.component.css']
})
export class QuestionsAnswersComponent implements OnInit {

  private _quizQAUrl = "api/qaa.json";
  private _quiz: IQuiz[];
  private _answers: Array<string> = [];
  errorMessage: string;

  questionIndex: number = 1;
  selectedOptions: Array<string> = [];
  options = document.getElementsByClassName('active');
  quizScore: number = 0;

  constructor(
    private _http: Http,
    private router: Router) { }

  // get the list of the questions and answers as an observable
  getQAAList(): Observable<IQuiz[]> {
    return this._http.get(this._quizQAUrl)
      .map(response => <IQuiz[]>response.json().quizData)
  }

  // selected options
  selected(elem: any) {
    elem.classList.toggle('active'); // adds/removes "active" CSS class to the elements that the user clicks on
    this.selectedOptions.length = 0;
    for (var i = 0; i < this.options.length; i++) {
      this.selectedOptions.push(this.options[i].innerHTML);
    }
  }

  // next question function
  nextQuestion() {
    if (this.questionIndex < this._quiz.length) {
      for (var i = this.questionIndex - 1; i < this.questionIndex; i++) {
        if (this.selectedOptions /* === this._quiz[i].answer */) {
          console.log("Selected Answer: " + this.selectedOptions)
          console.log("Correct Answer: " + this._quiz[i].answer);
          this.selectedOptions.length = 0;
        }
      }
      this.questionIndex++;
      this.selectedOptions.length = 0;
    } else {
      console.log("Quiz Finished!");
      this.router.navigate(['results']);
    }
  }

  ngOnInit(): void {
    this.getQAAList()
      .subscribe(
      _quiz => this._quiz = _quiz, // set our local _quiz array equal to the IQuiz[] data which arrive from our data stream
      error => this.errorMessage = <any>error);
  }
}
