import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../main/main.component.css', './about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public title: string = "title about text-info";
  public scroll;
  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, this.isLaptop());
  }

  // ngAfterViewInit() {
  // }

  scrollEvent = () => {
    let paragraph = document.getElementsByClassName("paragraph") as HTMLCollectionOf<HTMLElement>;
    if (!this.isLaptop() || /edge\//i.test(window.navigator.userAgent)) {
      this.scroll = window.pageYOffset;
    } else {
      this.scroll = document.documentElement.scrollTop;
    }
    let addition_top = this.isLaptop() ? 500 : 0;

    for (let i = 0; i < paragraph.length; i++) {
      if (this.scroll > (paragraph[i].offsetTop + paragraph[i].getBoundingClientRect().top + paragraph[i].clientHeight + addition_top) - window.outerHeight) {
        paragraph[i].setAttribute("style", "opacity: 1");
        paragraph[i].classList.add("animated", "fadeInUp");
      }
    }
  }

  isLaptop() {
    if (window.innerWidth > 320 && window.innerWidth <= 720) {
      return false;
    } else {
      return true;
    }
  }
}
