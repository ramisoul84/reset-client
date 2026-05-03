import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ticket-terms',
  imports: [RouterLink],
  templateUrl: './ticket-terms.component.html',
  styleUrl: './ticket-terms.component.css'
})
export class TicketTermsComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
