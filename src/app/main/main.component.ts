import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  public title: string = "title main fadeInRight animated";
  public scroll;
  public pages = document.getElementsByClassName("page") as HTMLCollectionOf<HTMLElement>;

  ngOnInit() {
    document.getElementById("greetings").addEventListener('animationend', this.fadeout);
    document.getElementById("pic-of-me").addEventListener('animationend', this.fadeout);
    window.addEventListener('scroll', this.showPagination, true);
  }

  fadeout = () => {
    document.getElementById("greetings").classList.add("animated", "fadeOutRight");
    document.getElementById("greetings").style.animationDelay = "2s";
    document.getElementById("pic-of-me").classList.add("animated", "fadeOutRight");
    document.getElementById("pic-of-me").style.animationDelay = "2s";
  }

  showPagination = () => {
    let pagination = document.getElementById("pagination");
    let pages = document.getElementsByClassName("page") as HTMLCollectionOf<HTMLElement>;
    if (!this.isLaptop() || /edge\//i.test(window.navigator.userAgent)) {
      this.scroll = window.pageYOffset;
    } else {
      this.scroll = document.documentElement.scrollTop;
    }

    if (this.scroll > pages[1].offsetTop - this.scroll) {
      pagination.setAttribute("style", "opacity: 1; display: block");
      pagination.classList.remove("animated", "fadeOut");
      pagination.classList.add("animated", "fadeIn");
    } else {
      pagination.setAttribute("style", "opacity: 0; display: none");
      pagination.classList.remove("animated", "fadeIn");
      pagination.classList.add("animated", "fadeOut");
    }
  }

  top = () => {
    $("html, body").animate({
      scrollTop: 0
    }, 1500)
  }
  profile = () => {
    $("html, body").animate({
      scrollTop: this.pages[0].scrollHeight
    }, 1500)
  }
  work = () => {
    $("html, body").animate({
      scrollTop: this.pages[2].offsetTop
    }, 1500)
  }
  projects = () => {
    $("html, body").animate({
      scrollTop: this.pages[3].offsetTop
    }, 1500)
  }
  contact = () => {
    $("html, body").animate({
      scrollTop: document.documentElement.scrollHeight
    }, 1500)
  }
  isLaptop() {
    if (window.innerWidth > 320 && window.innerWidth <= 720) {
      return false;
    } else {
      return true;
    }
  }


}
