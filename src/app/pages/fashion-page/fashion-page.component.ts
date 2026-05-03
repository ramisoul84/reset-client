import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fashion-page',
  imports: [CommonModule,RouterLink],
  templateUrl: './fashion-page.component.html',
  styleUrl: './fashion-page.component.css'
})
export class FashionPageComponent {
  show:boolean=false;
  src:string= '';
  
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


  onImageClick(event: Event):void{
    const imageElement = event.target as HTMLImageElement;
    this.src = imageElement.src;
    this.show = !this.show
  }

}