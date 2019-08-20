import { Component, OnInit } from '@angular/core';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  public title: string = "title main fadeInRight animated";

  ngOnInit() {
    document.getElementById("greetings").addEventListener('animationend', this.fadeout);
    document.getElementById("pic-of-me").addEventListener('animationend', this.fadeout);
  }

  fadeout = () => {
    document.getElementById("greetings").classList.add("animated", "fadeOutRight");
    document.getElementById("greetings").style.animationDelay = "2s";
    document.getElementById("pic-of-me").classList.add("animated", "fadeOutRight");
    document.getElementById("pic-of-me").style.animationDelay = "2s";
  }


}
