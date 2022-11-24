import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VgAPI } from 'ngx-videogular';
import { MovieService } from '../services/movie.service';

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
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) {
    this.animationDone = false;
  }
  srtLink: string;


  ngOnInit(): void {

    console.log("custom player url: ", this.url);

    this.url = this.route.snapshot.queryParamMap.get('url');
    this.srt = this.route.snapshot.queryParamMap.get('srt');

    console.log("custom player url: ", this.url);
    console.log("custom player srt: ", this.srt);

    // this.srt = "https://raw.githubusercontent.com/zonewanz/sub-k-drama/master/%5BAvengers%20Subbing%20Club%5D.EP.7.ENGSUB.vtt";
    this.movieService.getSubtitleFromLink(this.srt).subscribe( subs => {
      this.srt = subs;
      console.log("sub: ", this.srt);

        
      // const file = new Blob([this.srtLink], { type: "text/plain" });
    
      // const link = document.createElement("a");
      // link.href = URL.createObjectURL(file);
      // link.download = 'subs.vtt';
      // link.click();
      // link.remove(); 
    })

    

    window.scroll(0,0);
    setTimeout(()=>{                           //<<<---using ()=> syntax
      this.animationDone = true;
     }, 3500);
    
  }

  // getSubtitles() {
  //   return this.movieService.getSubtitleFromLink(this.srt);
  // }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.play();
  }


}
