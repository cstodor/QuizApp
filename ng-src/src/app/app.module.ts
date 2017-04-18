import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
// Routing
import { AppRoutingModule, appRouting, appRoutingProviders } from './app-routing.module';
// Service
import { QuizService } from './components/quiz/quiz.service';
import { Auth } from "./components/auth/auth.service";
import { AuthGuard } from './components/auth/auth-guard.service';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TimerComponent } from './components/quiz/timer/timer.component';
import { QuestionsAnswersComponent } from './components/quiz/questions-answers/questions-answers.component';
import { ResultsComponent } from './components/quiz/results/results.component';
import { HighScoresComponent } from './components/high-scores/high-scores.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Error404Component } from './components/error-404/error-404.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    TimerComponent,
    QuestionsAnswersComponent,
    ResultsComponent,
    HighScoresComponent,
    ProfileComponent,
    Error404Component,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    appRouting
  ],
  providers: [
    appRoutingProviders,
    QuizService,
    Auth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
