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
  // selectedOptions: Array<string> = []

  _quiz: IQuiz[];
  errorMessage: string;

  constructor(private _http: Http) { }

  // get the list of the questions and answers as an observable
  getQAAList(): Observable<IQuiz[]> {
    return this._http.get(this._quizQAUrl)
      .map(response => <IQuiz[]>response.json().quizData)
  }
  // get one question and their answers by ID an an observable
  getQAA(id: number): Observable<IQuiz> {
    return this.getQAAList()
      .map(questions => questions.find(question => question.id === id));
  }

  // selected options
  selected(elem: any) {
    elem.classList.toggle('active');
    var options = document.getElementsByClassName('active');

    for (var i = 0; i < options.length; i++) {
      let selectedOptions = options[i].innerHTML;
      console.log('selectedOptions: ' + selectedOptions)
    }
    console.log("number of selections: " + options.length);
  }


  // next question function
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
