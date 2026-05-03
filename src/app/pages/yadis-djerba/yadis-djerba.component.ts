import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-yadis-djerba',
  imports: [CommonModule,RouterLink],
  templateUrl: './yadis-djerba.component.html',
  styleUrl: './yadis-djerba.component.css'
})
export class YadisDjerbaComponent {
  show:boolean=false;
  src:string= '';

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

  onImageClick(event: Event):void{
    const imageElement = event.target as HTMLImageElement;
    this.src = imageElement.src;
    this.show = !this.show
  }
}
