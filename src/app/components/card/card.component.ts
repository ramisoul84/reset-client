import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { 
  animate, 
  query, 
  stagger, 
  state, 
  style, 
  transition, 
  trigger, 
  group 
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed => expanded', [
        group([
          animate('400ms ease-out', style({ height: '*', opacity: 1 })),
          query('.card-content', [
            style({ transform: 'translateY(20px)', opacity: 0 }),
            stagger('50ms', [
              animate('300ms ease-out', style({ 
                transform: 'translateY(0)', 
                opacity: 1 
              }))
            ])
          ])
        ])
      ]),
      transition('expanded => collapsed', [
        group([
          animate('300ms ease-in', style({ height: '0', opacity: 0 })),
          query('.card-content', [
            stagger('-50ms', [
              animate('200ms ease-in', style({ 
                transform: 'translateY(20px)', 
                opacity: 0 
              }))
            ])
          ])
        ])
      ])
    ])
  ]
})
export class CardComponent {
  @Input() title = '';
  expanded = false;
  @Input() set content(html: string) {
    this._content = this.sanitizer.bypassSecurityTrustHtml(html);
  }
  _content!: SafeHtml;
  @ViewChild('cardBody') cardBody!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  toggle() {
    this.expanded = !this.expanded;
  }
}
