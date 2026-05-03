import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-slider',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent<T = any> implements AfterViewInit {
  @Input() items: T[] = [];
  @Input() firstImg: string = "";
  @Input() itemTemplate?: any;
  @Input() slider: boolean = false;


  swiperConfig: SwiperOptions = {
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
  };


  @ViewChild('swiperContainer', { static: true }) swiperContainer!: ElementRef;


  ngAfterViewInit() {
   // register(); // Register Swiper custom elements
    
    Object.assign(this.swiperContainer.nativeElement, this.swiperConfig);
    
    // Initialize swiper
    this.swiperContainer.nativeElement.initialize();
  }

}
