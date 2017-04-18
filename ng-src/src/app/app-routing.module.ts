import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// AuthGuard
import { AuthGuard } from './components/auth/auth-guard.service';
// Components
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HighScoresComponent } from "./components/high-scores/high-scores.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { Error404Component } from './components/error-404/error-404.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent, canActivate: [AuthGuard] },
  { path: 'high-scores', component: HighScoresComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'unauthorized', component: Error404Component },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }

export const appRoutingProviders: any[] = [AuthGuard];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
