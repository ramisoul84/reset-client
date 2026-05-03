import { CommonModule, ViewportScroller } from '@angular/common';
import { Component} from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';
import { cards } from './cards';

@Component({
  selector: 'app-festival-a-z-page',
  imports: [CommonModule,CardComponent,RouterLink],
  templateUrl: './festival-a-z-page.component.html',
  styleUrl: './festival-a-z-page.component.css',

})
export class FestivalAZPageComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  cards = cards

}
