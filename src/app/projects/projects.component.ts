import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Projects } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../main/main.component.css', './projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public project_desc;
  public rowNum: number = 0;
  public projs: Projects;
  public left: string = "";
  public right: string = "";
  public desc: boolean = false;
  public video: boolean = false;
  public startVideo: boolean = true;
  // @ViewChild('option') option: ElementRef;

  ngOnInit() {

    this.projs = new Projects();
    this.project_desc = this.projs.getProject();
    var userAgent = navigator.userAgent || navigator.vendor;

    if (!(/iPad|iPhone|iPod/.test(userAgent)) || window.innerWidth >= 450) {
      if (this.project_desc[this.project_desc.length - 1].length == 1) {
        this.project_desc[this.project_desc.length - 1].push({ desc: [], image: "empty" });
      }
    }
  }

  //[ngClass] using this.left and this.right works but if you move a mouse too fast, it sometimes doesn't detect (mouseleave)
  //(mouseenter) and (mouseleave) with event solved the problem
  openMenu = (event) => {
    // this.left = "animated slideInLeft";
    // this.right = "animated slideInRight";
    let options = event.target.children;
    for (let i = 0; i < options.length; i++) {
      if (i < 3) {
        options[i].classList.remove("animated", "slideOutLeft");
        options[i].classList.add("animated", "slideInLeft");
      } else {
        options[i].classList.remove("animated", "slideOutRight");
        options[i].classList.add("animated", "slideInRight");
      }
    }
  }

  closeMenu = (event) => {
    // this.left = "animated slideOutLeft";
    // this.right = "animated slideOutRight";

    let options = event.target.children;
    for (let i = 0; i < options.length; i++) {
      if (i < 3) {
        options[i].classList.remove("animated", "slideInLeft");
        options[i].classList.add("animated", "slideOutLeft");
      } else {
        options[i].classList.remove("animated", "slideInRight");
        options[i].classList.add("animated", "slideOutRight");
      }
    }
  }

  openSource = (event, type: string) => {
    let menu = event.target.parentNode;
    let each_project = event.target.parentNode.parentNode;
    menu.style.display = "none";
    each_project.getElementsByClassName("proj-desc")[0].style.display = "block";
    if (type == "video") {
      each_project.getElementsByClassName("video")[0].style.display = "block";
      each_project.getElementsByClassName("desc-block")[0].style.display = "none";
    } else {
      each_project.getElementsByClassName("video")[0].style.display = "none";
      each_project.getElementsByClassName("desc-block")[0].style.display = "block";
    }
  }

  backMenu = (event) => {
    let proj_desc = event.target.parentNode;
    let each_project = event.target.parentNode.parentNode;
    proj_desc.style.display = "none";
    each_project.getElementsByClassName("menu")[0].style.display = "block";
  }

  playVideo = (event) => {
    this.startVideo = this.startVideo ? false : true;

    if (this.startVideo) {
      event.target.play();
    } else {
      event.target.pause();
    }
  }
}
