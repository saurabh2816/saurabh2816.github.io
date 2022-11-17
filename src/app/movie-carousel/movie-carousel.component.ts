import { ChangeDetectorRef, Component, Input, NgZone, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../model/Movie';
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectFade
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { BehaviorSubject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  EffectFade
]);



@Component({
  selector: 'app-movie-carousel',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
   },
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MovieCarouselComponent implements OnInit {
  
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  @Input() data: any[];
  @Input() src:string;
  currentMovieClicked: number;
  currentMovieUrl: string;
  clickPlay: boolean = false;
  movieClicked: Movie;
  show: boolean;
  modalMovie: any;
  modalMovieLink: any;
  isModalOpen = false;
  modalReference: any;

  closeModal: string; // modal

  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {  

  }


  // modal functions
  triggerModal(content: any, movie: any) {
    this.modalMovie = movie;
    this.modalMovieLink = movie.link;
    // this.modalReference = this.modalService.open(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.isModalOpen = true;
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  getDismissReason(reason: any): string {

      return  `with: ${reason}`;
    
  }

  
  playMovie(movie: Movie) {
    // if(this.isModalOpen) {
    //   this.isModalOpen = false;
      this.modalService.dismissAll();
    // }
    this.clickPlay = true;
    this.movieClicked = movie;

    this.router.navigate(['/play'], { queryParams: { url: movie.link } });

  }

  getMovieUrl(movie: Movie) {
    return movie.link;
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  getTwoActors(actors: string) {
    return actors.split(",").splice(0, 2);
  } 

  getMovieGenres(genres: string) {
    // Horror&nbsp; • &nbsp;Mystery&nbsp; • &nbsp;Thrille
    return genres.split(",").join(" • ");
  }
}
