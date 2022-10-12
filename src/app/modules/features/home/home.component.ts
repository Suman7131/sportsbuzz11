import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    $(function() {
      $('.owl-carousel.testimonial-carousel').owlCarousel({
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        dots: false,
        responsive: {
          0: {
            items: 1,
          },
          750: {
            items: 2,
          }
        }
      });
    });


    
  }

}
