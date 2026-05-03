import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-picture',
  imports: [CommonModule],
  templateUrl: './section-picture.component.html',
  styleUrl: './section-picture.component.css'
})
export class SectionPictureComponent {
  @Input() src: string = "";
  @Input() src_600: string = "";
  @Input() rightBottom: string = "";
  @Input() leftTop: string = "";
}
