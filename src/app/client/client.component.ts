import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // $(".testimonial-slider").owlCarousel({
    //   loop: true,
    //   margin: 30,
    //   nav: true,
    //   autoplay: true,
    //   autoplayTimeout: 5000,
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     768: {
    //       items: 2
    //     },
    //     1024: {
    //       items: 3
    //     }
    //   }
    // });
  }

}
