import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLink,LottieComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() color: string = "";
  isMenuOpened:boolean = false;
  isLogoShow:boolean = false;
  resetLoopOptions: AnimationOptions = {
    path: 'assets/animations/reset-loop.json',
    loop:true,
  };

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }

  scrollToPage(page: string) {
    this.isMenuOpened = !this.isMenuOpened;
    setTimeout(() => {
      document
      .getElementById(page.toLowerCase())!
      .scrollIntoView({ behavior: 'smooth' });
    }, 600); 
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const mission= document.getElementById('mission-section');
    const height = window.innerHeight
    const missionPosition = mission!.getBoundingClientRect().top;
    if ( missionPosition < 0){
      this.isLogoShow = true
    }else{
      this.isLogoShow = false
    }
  }

  openExternalPage(url: string) {
    window.open(url, '_blank');
  }
}
