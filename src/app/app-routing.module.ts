import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SaveMoviesComponent } from './save-movies/save-movies.component';
import { CustomVideoComponent } from './custom-video/custom-video.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'play', component: CustomVideoComponent },
  { path: 'saveAllMoviesFromALink', component: SaveMoviesComponent },
  { path: '**', component: ErrorPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


