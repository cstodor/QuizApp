import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'; // required for getting products from JSON file
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // required by the .map method

// Data
import { IQuiz } from '../../../../api/qaa';

@Component({
  selector: 'app-questions-answers',
  templateUrl: './questions-answers.component.html',
  styleUrls: ['./questions-answers.component.css']
})
export class QuestionsAnswersComponent implements OnInit {

  private _quizQAUrl = "api/qaa.json";
  questionIndex: number = 1;

  _quiz: IQuiz[];
  errorMessage: string;

  constructor(private _http: Http) { }

  getQAAList(): Observable<IQuiz[]> {
    return this._http.get(this._quizQAUrl)
      .map(response => <IQuiz[]>response.json().quizData)
  }

  getQAA(id: number): Observable<IQuiz> {
    return this.getQAAList()
      .map(questions => questions.find(question => question.id === id));
  }
  nextQuestion() {
    if (this.questionIndex < 5) {
      this.questionIndex++;
    }
  }
  finishQuiz() {

  }

  ngOnInit(): void {
    this.getQAAList()
      .subscribe(
      _quiz => this._quiz = _quiz, // set our local _quiz array equal to the IQuiz[] data which arrive from our data stream
      error => this.errorMessage = <any>error);
  }
}
