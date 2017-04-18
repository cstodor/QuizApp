import { Component, OnInit, DoCheck, AfterViewChecked } from '@angular/core';

// Service
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  secLeft: any;

  constructor(public _quizService: QuizService) { }

  ngOnInit() {

    var self = this;

    function countdown(elem, min, sec) {
      var element, endTime, hours, mins, msLeft, time;

      function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
      }

      function updateTimer() {
        msLeft = endTime - (+new Date);
        var secondsLeft = Math.round(msLeft / 1000)
        self.secLeft = secondsLeft;

        if (msLeft < 1000) {
          element.innerHTML = "Time is up!";
        } else {
          time = new Date(msLeft);
          hours = time.getUTCHours();
          mins = time.getUTCMinutes();
          element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
          setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
        return secondsLeft;
      }

      element = document.getElementById(elem);
      endTime = (+new Date) + 1000 * (60 * min + sec) + 500;

      updateTimer();

    }

    countdown("timer", 1, 0);
  }

  ngDoCheck() {
    this._quizService.timeLeft(this.secLeft);
    if (this.secLeft === 0) {
      this._quizService.quizDone(true);
    }
  }

}
