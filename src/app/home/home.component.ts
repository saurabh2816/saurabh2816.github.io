import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import { Movie } from '../model/Movie';
const _ = require("lodash"); 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  data: Movie[];
  getMoviesLoaded: boolean = false;
  moviesByCountry: Movie[] = [];
  moviesByAction: Movie[] = [];
  moviesByAdventure : Movie[] = [];
  moviesByDrama : Movie[] = [];
  moviesByCrime : Movie[] = [];
  moviesByThriller : Movie[] = [];
  moviesByHorror : Movie[] = [];
  moviesBySciFi : Movie[] = [];
  moviesByRomance: Movie[] = [];
  moviesByAnimation: Movie[] = [];
  moviesByComedy : Movie[] = [];


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

    this.getMoviesLoaded = true;

    this.movieService.getMovies().subscribe( (data: Movie[]) => {

       this.data = data;
       this.getMoviesLoaded = true;
  
      this.data.forEach( (movie: Movie) => {

          if(movie.genre.includes("Action")) {
            this.moviesByAction.push(movie);
            return;
          }

          if(movie.genre.includes("Comedy")) {
            this.moviesByComedy.push(movie);
            return;
          }

          if(movie.genre.includes("Adventure")) {
            this.moviesByAdventure.push(movie);
            return;
          }

          if(movie.genre.includes("Drama")) {
            this.moviesByDrama.push(movie);
            return;
          }

          if(movie.genre.includes("Crime")) {
            this.moviesByCrime.push(movie);
            return;
          }

          if(movie.genre.includes("Thriller")) {
            this.moviesByThriller.push(movie);
            return;
          }

          if(movie.genre.includes("Horror")) {
            this.moviesByHorror.push(movie);
            return;
          }

          if(movie.genre.includes("Sci-Fi")) {
            this.moviesBySciFi.push(movie);
            return;
          }

          if(movie.genre.includes("Romance")) {
            this.moviesBySciFi.push(movie);
            return;
          }

          if(movie.genre.includes("Animation")) {
            this.moviesBySciFi.push(movie);
            return;
          }
          
      });

      console.log("he");
       
    })
  } 
}
