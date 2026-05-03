import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-intro-page',
  imports: [CommonModule,RouterLink,LottieComponent],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.css'
})
export class IntroPageComponent implements AfterViewInit,OnDestroy{
  @ViewChild('introVideo') videoRef!: ElementRef<HTMLVideoElement>;
  private video!: HTMLVideoElement;
  private animationItem!: AnimationItem;

  loadingProgress = signal(0);
  isLoaded = signal(false);
  currentAnimation = signal(1);

  resetInOptions: AnimationOptions = {
    path: 'assets/animations/reset-in.json',
    autoplay: false,
    loop:false,
  };
  resetLoopOptions: AnimationOptions = {
    path: 'assets/animations/reset-loop.json',
    autoplay: true,
    loop:true,
  };

  ngAfterViewInit() {
    this.video = this.videoRef.nativeElement;
    this.setupVideo();
  }

  private setupVideo() {
    if (!this.video) return;

    this.video.preload = 'auto';
    this.video.muted = true;
    this.video.playsInline = true;

    this.video.addEventListener('progress', () => this.updateLoadingProgress());
    
    this.video.addEventListener('canplaythrough', () => {
      this.handleCanPlayThrough(),
      this.checkPlaybackReady();
    } );
    
    this.video.addEventListener('error', () => this.handleVideoError());
    
    this.video.load();
  }

  private checkPlaybackReady() {
    if (this.isLoaded() && this.animationItem) {
      this.startPlayback();
    }
  }

  private async startPlayback() {
    try {
      this.animationItem.play();
      setTimeout(() => {
        this.currentAnimation.set(2);
      },4400)
      await this.video.play();
    } catch (err) {
      console.error('Playback failed:', err);
      this.animationItem.pause();
    }
  }


  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
    if (this.currentAnimation() === 1) {
      animationItem.addEventListener('complete', () => {
        animationItem.destroy();  
      });
    }
  }

  private updateLoadingProgress() {
    if (this.video.buffered.length > 0 && this.video.duration > 0) {
      const percentLoaded = (this.video.buffered.end(0) / this.video.duration) * 100;
      this.loadingProgress.set(parseFloat(percentLoaded.toFixed(1)));
    }
  }

  private async handleCanPlayThrough() {
    this.isLoaded.set(true);
    try {
      await this.video.play();
    } catch (err) {
      console.error('Autoplay failed:', err);
    }
  }

  private handleVideoError() {
    //this.playError.set('Failed to load video');
    console.error('Video error:', this.video.error);
  }

  ngOnDestroy() {
    if (this.video) {
      this.video.pause();
      this.video.removeAttribute('src');
      this.video.load();
    }
  }
}
