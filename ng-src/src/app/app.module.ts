import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionsAnswersComponent } from './components/quiz/questions-answers/questions-answers.component';
// Routing
import { AppRoutingModule, appRouting, appRoutingProviders } from './app-routing.module';
// Service
import { QuizService } from './components/quiz/quiz.service';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TimerComponent } from './components/quiz/timer/timer.component';
import { QuestionsAnswersComponent } from './components/quiz/questions-answers/questions-answers.component';
import { ResultsComponent } from './components/quiz/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    TimerComponent,
    QuestionsAnswersComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    appRouting
  ],
  providers: [appRoutingProviders, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
