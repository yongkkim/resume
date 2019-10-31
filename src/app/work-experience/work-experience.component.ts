import { Component, OnInit, HostListener } from '@angular/core';
import { Experience } from './expTemplate';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['../main/main.component.css', './work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  public experiences: Array<Experience> = [];
  private each_experience: Experience;

  ngOnInit() {
    this.each_experience = {
      position: "Junior Web Developer (Contract)",
      duration: "Apr.2019 - July.2019",
      company: "Bell",
      address: "Mississauga, ON",
      description: [
        "Upgraded software to improve the performance and database management, and reduce complaints from end users",
        "Created automated Node.js scripts to improve the collection and parsing of data in JSON and HTML",
        "Performed QA test on data from large active databases using SQL stored procedures",
        "Created UI to rework Windows Form Application to Angular Web Application"
      ]
    }
    this.experiences.push(this.each_experience);

    this.each_experience = {
      position: "Junior Application QA Tester",
      duration: "Jan.2018 - Dec.2018",
      company: "Ministry of Children, Community, and Social Services",
      address: "Toronto, ON",
      description: [
        "Tested the functionality of applications and reported the defects to developers within an agile environment",
        "Executed functional, unit and regression testing based on the test cases",
        "Tracked software issues/bugs/defects using Team Foundation Server",
        "Assisted developers in deploying the code to different types of testing environments",
        "Reviewed and investigated the incidents raised by the end users"
      ]
    }
    this.experiences.push(this.each_experience);

    this.each_experience = {
      position: "Web Developer",
      duration: "May.2015 - Apr.2016",
      company: "The Organic Artists",
      address: "Toronto, ON",
      description: [
        "Upgraded a static website to a dynamic blog website",
        "Improved overall UI of the website for users to conveniently explore and interact with other users",
        "Created a user log-in system using account credentials for better security",
        "Analyzed solutions to help the owner of the website increase sales",
        "Audited the back end of the web app to ensure data integrity using phpMyAdmin"
      ]
    }
    this.experiences.push(this.each_experience);
  }

  // ngAfterViewInit() {
  //   if (!this.isLaptop()) {
  //     let exp = document.getElementsByClassName("exp-list") as HTMLCollectionOf<HTMLElement>;
  //     for (let i = 0; i < exp.length; i++) {
  //       exp[i].setAttribute("style", "opacity: 1");
  //     }
  //   }
  // }

  @HostListener('window:scroll') scrollEvent = () => {
    let exp = document.getElementsByClassName("exp-list") as HTMLCollectionOf<HTMLElement>;
    let exp_container = document.getElementsByClassName("info-container") as HTMLCollectionOf<HTMLElement>;
    let scroll;
    if (!this.isLaptop() || /edge\//i.test(window.navigator.userAgent)) {
      scroll = window.pageYOffset;
    } else {
      scroll = document.documentElement.scrollTop;
    }
    let addition_top = !this.isLaptop() ? 150 : 0;
    for (let i = 0; i < exp.length; i++) {
      if (scroll > (exp[i].offsetTop + exp_container[1].offsetTop + exp[i].clientHeight - addition_top) - window.outerHeight) {
        exp[i].setAttribute("style", "opacity: 1");
        exp[i].classList.add("animated", "fadeIn");
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
