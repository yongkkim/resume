import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../main/main.component.css', './contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public title: string = "title contact-list text-info"

  ngOnInit() {
  }

}
