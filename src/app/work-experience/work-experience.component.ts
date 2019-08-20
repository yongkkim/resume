import { Component, OnInit } from '@angular/core';
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
  public title: string = "title exp text-info";
  ngOnInit() {
    this.each_experience = {
      position: "Junior Developer",
      duration: "Apr.2019 - July.2019",
      company: "Bell",
      address: "Mississauga, ON",
      description: [
        "Created and improved features as requested for applications to improve the performance and quality of data, which reduced complaints from end users and increased the accuracy of data searches from databases",
        "Created automated Node.js scripts to improve the collection and parsing of data in JSON and HTML",
        "Performed QA tests on data from large active databases using SQL stored procedures",
        "Participated in data collection in order to have a better understanding of analytics",
        "Created UIs to rework Windows Form Applications to Angular Web Applications"
      ]
    }
    this.experiences.push(this.each_experience);

    this.each_experience = {
      position: "Junior Application QA Tester",
      duration: "Jan.2018 - Dec.2018",
      company: "Ministry of Children, Community, and Social Services",
      address: "Toronto, ON",
      description: [
        "Tested the functionality of applications and reported the defects to the developers within an agile environment",
        "Prepared test documentation, test cases, and scripts",
        "Executed functional, unit and regression testing based on the test cases",
        "Documented and tracked software issues/bugs/defects",
        "Assisted developers in deploying the code to different types of testing environments",
        "Reviewed and investigated the incidents raised by the end users in a production environment"
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
        "Audited the back end of the web app to ensure data integrity"
      ]
    }
    this.experiences.push(this.each_experience);
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = () => {
    let exp = document.getElementsByClassName("exp-list") as HTMLCollectionOf<HTMLElement>;
    let exp_container = document.getElementsByClassName("info-container") as HTMLCollectionOf<HTMLElement>;
    // window.innerHeight, document.documentElement.scrollTop
    for (let i = 0; i < exp.length; i++) {
      if (document.documentElement.scrollTop > (exp[i].offsetTop + exp_container[1].offsetTop + exp[i].clientHeight) - window.outerHeight) {
        //console.log("here");
        exp[i].setAttribute("style", "opacity: 1");
        exp[i].classList.add("animated", "slideInLeft");
      }
    }
  }

}
