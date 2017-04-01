import { Component, OnInit, DoCheck, AfterViewChecked } from '@angular/core';

// Service
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private _quizService: QuizService) { }

  ngOnInit() {
    function countdown(elem, min, sec) {
      var element, endTime, hours, mins, msLeft, time;

      function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
      }

      function updateTimer() {
        msLeft = endTime - (+new Date);
        if (msLeft < 1000) {
          element.innerHTML = "Time is up!";
        } else {
          time = new Date(msLeft);
          hours = time.getUTCHours();
          mins = time.getUTCMinutes();
          element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
          setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
      }
      
      element = document.getElementById(elem);
      endTime = (+new Date) + 1000 * (60 * min + sec) + 500;

      updateTimer();
    }
    countdown("counter", 0, 10);
  }

  ngDoCheck() {
    console.log('CHECK!');
    if (document.getElementById('counter').innerHTML === "Time is up!") {
      console.log('TIME\'S UP!');
      this._quizService.quizDone(true);
    }
  }

}
