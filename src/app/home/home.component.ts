import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import { Movie } from '../model/Movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

       const srtLink = "https://www.opensubtitles.com/download/AB728182FF37355DC1EBB57DDE75D39471071A450782A59C536562AA9B3EA2F0155F4CD643BB050C6C2C840C254BFB9BBC7C88C9A256039E0034FADEDB37E42129F41528B8BF4056F764EA3C099AE6091A509D8956FAA8C6D808F74F3815015F8211D3D89354551E271302F786826F3A95CE60545C00A1013396F436EEAF717899359FDEFEB87E97EA4467D91E01D914411CCA2CEE360075C29030E354353A52F8FABDF2BFA685B0576376C3871CD389650F84C797B84A52875436701433A30F79F32E8C865138259144ADA291DE1D01518447C1E8A055A2F07701B182B4C7F1C77C7C0C8C4D7A3C113DA0F74692DD8601755296EA99237EC5465966DAA9073928F1915191492CBD0B2693E3A210FA62/subfile/24%20-%20Day%207%20-%20%5B7x13%5D.en.srt";

       this.movieService.getSubtitleFromLink(srtLink).subscribe( subs => {
        console.log(subs);
       })
  
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
