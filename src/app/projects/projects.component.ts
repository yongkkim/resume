import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../main/main.component.css', './projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public title: string = "title project text-info";
  public video: string = "";
  public project_desc: Array<string[]> = [];

  ngOnInit() {
    let desc: string[] = [];

    desc.push("Built Single Page website using Angular and REST API for users of League of Legends to search for their game history");
    desc.push("Separated and grouped a large number of small JSON data chunks into relevant blocks");
    desc.push("Implemented a search functionality to find user’s profile and match history from records in the server");
    desc.push("Handled errors from HTTP Responses and input on submit and displayed proper error messages");
    desc.push("Included mobile responsive design and cross-browser compatibility for different browsers and devices");
    desc.push("Designed pop-up description of multiple images and content structure enhancing UI/UX for users");
    this.project_desc.push(desc);

    desc = [];
    desc.push("Created user friendly calendar using React for making plans for each day");
    desc.push("Implemented user-friendly UI to easily change month and year and manage all scheduled plans");
    desc.push("Provided users options to view, add, delete one plan, undo, and clear all plans on each day");
    desc.push("Stored data into cookie to keep on tracking plans for 30 days");
    this.project_desc.push(desc);
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  // ngAfterViewInit() {
  //   if (!this.isLaptop()) {
  //     let proj_a = document.getElementById("angular-desc");
  //     let proj_r = document.getElementById("react-desc");
  //     let links = document.getElementsByClassName("source") as HTMLCollectionOf<HTMLElement>;
  //     proj_a.style.opacity = "1";
  //     proj_r.style.opacity = "1";

  //     for (let i = 0; i < links.length; i++) {
  //       links[i].style.opacity = "1";
  //       links[i].classList.add("animated", "fadeInUp");
  //     }
  //   }
  // }

  scrollEvent = () => {
    let proj_a = document.getElementById("angular-desc");
    let proj_r = document.getElementById("react-desc");
    let proj_image = document.getElementsByClassName("video-background")[0].clientHeight + 200;

    let links = document.getElementsByClassName("source") as HTMLCollectionOf<HTMLElement>;
    let desc = document.getElementsByClassName("video-background")[0].clientHeight + 420;
    let proj_container = document.getElementsByClassName("info-container") as HTMLCollectionOf<HTMLElement>;

    let scroll;
    if (!this.isLaptop() || /edge\//i.test(window.navigator.userAgent)) {
      scroll = window.pageYOffset;
    } else {
      scroll = document.documentElement.scrollTop;
    }

    if (scroll > (proj_image + proj_container[2].offsetTop + proj_a.clientHeight) - window.outerHeight) {
      proj_a.style.opacity = "1";
      proj_a.classList.add("animated", "slideInLeft");

      proj_r.style.opacity = "1";
      proj_r.classList.add("animated", "slideInRight");
    }

    if (scroll > (desc + proj_container[2].offsetTop + proj_a.clientHeight) - window.outerHeight) {
      for (let i = 0; i < links.length; i++) {
        links[i].style.opacity = "1";
        links[i].classList.add("animated", "fadeInUp");
      }
    }
  }

  playVideo = (event) => {
    event.target.previousSibling.style.webkitFilter = "blur(7px)";
    event.target.previousSibling.style.filter = "blur(7px)";
    event.target.style.opacity = "1";
    event.target.play();
  }

  pauseVideo = (event) => {
    event.target.previousSibling.style.webkitFilter = "blur(0)";
    event.target.previousSibling.style.filter = "blur(0)";
    event.target.style.opacity = "0";
    event.target.pause();
  }

  isLaptop() {
    if (window.innerWidth > 320 && window.innerWidth <= 720) {
      return false;
    } else {
      return true;
    }
  }
}
