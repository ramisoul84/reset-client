import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPictureComponent } from "../section-picture/section-picture.component";
import { DJ } from '../../_models/dj';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { MusicCardComponent } from "../music-card/music-card.component";
import { DJS } from './djs';


@Component({
  selector: 'app-music',
  imports: [CommonModule, SectionPictureComponent, LottieComponent, MusicCardComponent],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  djsShow:boolean=true;
  BandsShow:boolean=true;
  @Input() color: string = "#db8a08";
  lineupOptions: AnimationOptions = {
    path: 'assets/animations/lineup2.json',
    loop:true,
  };
  

  djs: DJ[] =DJS

  

  toggleDj(clickedDj: DJ) {
    if (clickedDj.expanded){
      clickedDj.expanded = false;
    
    }
    else{
      this.djs.forEach(dj => {
        dj.expanded = false
        });
        clickedDj.expanded = true;
  
      }

      setTimeout(() => {
        document
        .getElementById(clickedDj.name)!
        .scrollIntoView({ behavior: 'smooth' });
        window.scrollBy(0, -50);
      }, 400); 
    
    }
  
    select(option:string){
      console.log(option)
      if (option === "all"){
        this.djsShow = true;
        this.BandsShow = true;
      }
      if (option === "djs"){
        this.djsShow = true;
        this.BandsShow = false;
      }
      if (option ==="bands"){
        this.djsShow = false;
        this.BandsShow = true;
      }

     

    }


}
