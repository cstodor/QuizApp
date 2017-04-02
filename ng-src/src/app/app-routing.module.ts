import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
