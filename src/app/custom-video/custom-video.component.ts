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

    // this.srt = "https://www.opensubtitles.com/download/AB728182FF37355DD77820531916F333544662D8E206285C50646C0941EACFDCB9C8922CA490246CDB24119695D17424205B673FAD6AFF2033B510EB62E18DD5DA5C75D91AF79C9BCA6C986575B097B77B5CD6C712911C6D15E360B2B61B0CE5F9853656A37F3EAE354C61BA7265F387B4DCFBB2B78481D525A667A6389895D45BEEDBAA0B40F10EB7C5AE8881CA39D02F1E1893B30F22915B1FF88E63FC8512CE436F72CE065D17F6031EFB94FF47467A5161D3EDE46E5DF3648F8DA52E8337CA8595588446491528F9CAB293465A791B74BC51E1245334C8E19724FEF3BAEA9CF4A86DA8D695EF18C3EBDC3266BD6E56B9A38383DAA86CBE0C0E1C28601E29FBC004AFDDB621721534CE3894A4010B25C87A89FA6C2E29491580D3D8D4AEAF5CD68C6345CB8467/subfile/castle.rock.s01e03.webrip.x264-tbs.ettv.-eng.ro.webvtt";
    // this.movieService.getSubtitleFromLink(this.srt).subscribe( subs => {
    //   this.srt = subs;
    //   console.log("sub: ", this.srt);

        
    //   // const file = new Blob([this.srtLink], { type: "text/plain" });
    
    //   // const link = document.createElement("a");
    //   // link.href = URL.createObjectURL(file);
    //   // link.download = 'subs.vtt';
    //   // link.click();
    //   // link.remove(); 
    // })

    

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
