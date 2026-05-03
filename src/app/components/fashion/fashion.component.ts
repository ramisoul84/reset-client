import { Component, Input } from '@angular/core';
import { SectionPictureComponent } from "../section-picture/section-picture.component";
import { SliderComponent } from '../slider/slider.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fashion',
  imports: [SectionPictureComponent,SliderComponent,RouterLink,CommonModule],
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
  @Input() isMobile: boolean = false;
  fashion: string[] = [
    'assets/images/fashion/small/1.jpg',
    'assets/images/fashion/small/2.jpg',
    'assets/images/fashion/small/3.jpg',
    'assets/images/fashion/small/4.jpg',
    'assets/images/fashion/small/5.jpg',
    'assets/images/fashion/small/6.jpg',
    'assets/images/fashion/small/7.jpg',
    'assets/images/fashion/small/8.jpg',
    'assets/images/fashion/small/9.jpg',
    'assets/images/fashion/small/10.jpg',
    'assets/images/fashion/small/11.jpg',
    'assets/images/fashion/small/12.jpg',
    'assets/images/fashion/small/13.jpg',
    'assets/images/fashion/small/14.jpg',
    'assets/images/fashion/small/15.jpg',
    'assets/images/fashion/small/16.jpg',
    'assets/images/fashion/small/17.jpg',
    'assets/images/fashion/small/18.jpg',
    'assets/images/fashion/small/19.jpg',
    'assets/images/fashion/small/20.jpg',
    'assets/images/fashion/small/21.jpg',
    'assets/images/fashion/small/22.jpg',
    'assets/images/fashion/small/23.jpg',
  ];
}
