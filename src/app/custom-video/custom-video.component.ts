import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VgAPI } from 'ngx-videogular';
import { MovieService } from '../services/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-custom-video',
  templateUrl: './custom-video.component.html',
  styleUrls: ['./custom-video.component.scss']
})
export class CustomVideoComponent implements OnInit {

  @Input() url: any;
  @Input() srt: any;
  api: VgAPI;

  animationDone = false;
  currentTime: any;
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService, private location: Location) {
    this.animationDone = false;
  }
  srtLink: string;


  ngOnInit(): void {

    console.log("custom player url: ", this.url);

    this.url = this.route.snapshot.queryParamMap.get('url');
    this.srt = this.route.snapshot.queryParamMap.get('srt');

    console.log("custom player url: ", this.url);
    console.log("custom player srt: ", this.srt);

    window.scroll(0,0);
    setTimeout(()=>{                          
      this.animationDone = true;
     }, 3500);
    
  }

  goBack() {
    this.location.back();
  }

  // getSubtitles() {
  //   return this.movieService.getSubtitleFromLink(this.srt);
  // }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.play();
  }


}
