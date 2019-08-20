import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../main/main.component.css', './about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public title: string = "title about text-info";

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = () => {
    let paragraph = document.getElementsByClassName("paragraph") as HTMLCollectionOf<HTMLElement>;
    // window.innerHeight, document.documentElement.scrollTop
    for (let i = 0; i < paragraph.length; i++) {
      if (document.documentElement.scrollTop > (paragraph[i].offsetTop + paragraph[i].getBoundingClientRect().top + paragraph[i].clientHeight + 500) - window.outerHeight) {
        //console.log("here");
        paragraph[i].setAttribute("style", "opacity: 1");
        paragraph[i].classList.add("animated", "fadeInUp");
      }
    }
  }
}
