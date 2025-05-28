import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Optional: for default Swiper styles

declare var $: any; // Declare jQuery globally

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    new Swiper('#testiSlide1', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        992: { slidesPerView: 2 },
        1200: { slidesPerView: 2 },
        1300: { slidesPerView: 2.6 },
        1500: { slidesPerView: 3.6 }
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
      autoplay: {
        delay: 3000, // time between slides (in ms)
        disableOnInteraction: false // keeps autoplay after user interacts
      }
    });
  }
}
