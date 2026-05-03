import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-djerba-page',
  imports: [CommonModule,RouterLink],
  templateUrl: './djerba-page.component.html',
  styleUrl: './djerba-page.component.css'
})
export class DjerbaPageComponent {
  show:boolean=false;
  src:string= '';



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

  onImageClick(event: Event):void{
    const imageElement = event.target as HTMLImageElement;
    this.src = imageElement.src;
    this.show = !this.show
  }

}
