import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-hero',
  imports: [LottieComponent,CommonModule,RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit{
  isPlaying:boolean=false;
  muted:boolean=true;
  firstEntrence:boolean = false;
  isLoaded:boolean =false;
  imagesLoaded:number = 0;
  @ViewChild('heroImgWrapper') heroImgWrapper!: ElementRef<HTMLDivElement>;
  @ViewChild('videoHero') videoHero!: ElementRef<HTMLVideoElement>;
  resetHeroOptions: AnimationOptions = {
    path: 'assets/animations/reset-hero.json',
    loop:true,
  };
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  openExternalPage(url: string) {
    window.open(url, '_blank');
  }

  setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.firstEntrence) {
          console.log("enter", entry.intersectionRatio);
          this.firstEntrence = true;
          this.autoPlay();
        }
      });
    }, { threshold: 0.5 });
  
    if (this.heroImgWrapper?.nativeElement) {
      this.observer.observe(this.heroImgWrapper.nativeElement);
    } else {
      console.error('heroImgWrapper element not found!'); // Debug log
    }
  }

  autoPlay(){
  
    setTimeout(() => {
      this.isPlaying = true;
    
    }, 6000);
  }

  playPause() {
  this.isPlaying = !this.isPlaying;
  }


  soundToggle(){
    const video = this.videoHero.nativeElement;
    this.muted = !this.muted
    video.muted =  this.muted;

  }

  onImageLoad(){
    this.imagesLoaded ++
    if (this.imagesLoaded == 2){
      this.isLoaded = true
    }
    console.log("loaded")
  }
}
