import { CommonModule } from '@angular/common';
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

@Component({
  selector: 'app-music-card',
  imports: [CommonModule],
  templateUrl: './music-card.component.html',
  styleUrl: './music-card.component.css',
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
export class MusicCardComponent {
  @Input() name = '';
  @Input() info = '';
  @Input() info2 :string | undefined= '';
  @Input() src = '';
  @Input() src2 :string | undefined= '';
  @Input() sound = '';
  @Input() insta = '';
  @Input() sound2 : string | undefined= '';
  @Input() insta2: string | undefined = '';
  @Input() isExpandedd: boolean = false;


  expanded = false

  toggle(){
    this.expanded = !this.expanded
  }

  openLink(url:string):void{
    window.open(url, '_blank');
  }




}
