import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CounterComponent } from './components/quiz/counter/counter.component';
import { QuestionsAnswersComponent } from './components/quiz/questions-answers/questions-answers.component';
// Routing
import { AppRoutingModule, appRouting, appRoutingProviders } from './app-routing.module';
// Service
import { QuizService } from './components/quiz/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    CounterComponent,
    QuestionsAnswersComponent
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
