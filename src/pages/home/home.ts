import { Component, ViewChild } from '@angular/core';

import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  outputs: [ "closeEvent: close" ],
  host: {
      "(document:keydown)": "onKey($event)"
  }
})
export class HomePage {
  @ViewChild('mySlider') slider: Slides;

  mySlideOptions = {
    initialSlide: 0
  };  
  pageNumber = 1;
  maxPages;
   
  goToSlide(index) {
   this.slider.slideTo(index);
  }
   
  onSlideChanged() {
    this.pageNumber = this.slider.getActiveIndex() + 1;
    this.maxPages = this.slider.length();
  }
   
  onPageNumberChanged() {
    this.slider.slideTo(this.pageNumber - 1);
    this.maxPages = this.slider.length();
  }

  onKey(event: KeyboardEvent) {
    
    switch (event.key) {
      case "ArrowUp":
      case "ArrowLeft":
        this.slider.slidePrev();
        break;
      case "ArrowDown":
      case "ArrowRight":
        this.slider.slideNext();
        break;
      default:
    }
    
    this.onSlideChanged();
    
    return;

  }

}
