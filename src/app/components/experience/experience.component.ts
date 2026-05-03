import { Component, Input } from '@angular/core';
import { SectionPictureComponent } from "../section-picture/section-picture.component";
import { SliderComponent } from "../slider/slider.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [SectionPictureComponent, SliderComponent,RouterLink,CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input() isMobile: boolean = false;
  djerba: string[] = [
    'assets/images/djerba/small/1.jpg',
    'assets/images/djerba/small/2.jpg',
    'assets/images/djerba/small/3.jpg',
    'assets/images/djerba/small/4.jpg',
    'assets/images/djerba/small/5.jpg',
    'assets/images/djerba/small/6.jpg',
    'assets/images/djerba/small/7.jpg',
    'assets/images/djerba/small/8.jpg',
    'assets/images/djerba/small/9.jpg',
    'assets/images/djerba/small/10.jpg',
    'assets/images/djerba/small/11.jpg',
    'assets/images/djerba/small/12.jpg',
    'assets/images/djerba/small/13.jpg',
    'assets/images/djerba/small/14.jpg',
    'assets/images/djerba/small/15.jpg',
    'assets/images/djerba/small/16.jpg',
    'assets/images/djerba/small/17.jpg',
    'assets/images/djerba/small/18.jpg',
    'assets/images/djerba/small/19.jpg',
    'assets/images/djerba/small/20.jpg',
    'assets/images/djerba/small/21.jpg',
    'assets/images/djerba/small/22.jpg',
    'assets/images/djerba/small/23.jpg',
    'assets/images/djerba/small/24.jpg',
    'assets/images/djerba/small/25.jpg',
  ];

  hotel: string[] = [
    'assets/images/hotel/1.jpg',
    'assets/images/hotel/2.jpg',
    'assets/images/hotel/3.jpg',
    'assets/images/hotel/4.jpg',
    'assets/images/hotel/5.jpg',
    'assets/images/hotel/6.jpg',
    'assets/images/hotel/7.jpg',
    'assets/images/hotel/8.jpg',
    'assets/images/hotel/9.jpg',
    'assets/images/hotel/10.jpg',
    'assets/images/hotel/11.jpg',
    'assets/images/hotel/12.jpg',
    'assets/images/hotel/13.jpg',
    'assets/images/hotel/14.jpg',
    'assets/images/hotel/15.jpg',
    'assets/images/hotel/16.jpg',
    'assets/images/hotel/17.jpg',
    'assets/images/hotel/18.jpg',
  ];
}
