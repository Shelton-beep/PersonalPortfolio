import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'PersonalPortfolio';
  panelOpenState = true;
  header_variable = false;

  languages: any = ['JavaScript', 'Typescript',
    'HTML | HTML5',
    'CSS',
    'ES6+',
    'Php',
    'Java'];

  frameworks: any = [
    'Angular',
    'ReactJS',
    'React Native',
    'Android'
  ];

  tools: any = [
    'Git',
    'Intelij IDEA',
    'Visual Studio Code'
  ];

  homeIsClicked: boolean = false;
  projectsIsClicked: boolean = false;
  skillsIsClicked: boolean = false;
  aboutIsClicked: boolean = false;
  contactIsClicked: boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  @HostListener("document:scroll")
  //method to change the color of the nav bar when scroll is at 100px
  scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.header_variable = true;
    }
    else {
      this.header_variable = false;
    }
  }
  /* End of method */

  // method for opening contact form
  openContactForm() {
    this.projectsIsClicked = false;
    this.aboutIsClicked = false;
    this.homeIsClicked = false;
    this.skillsIsClicked = false;
    this.contactIsClicked = true;
    const dialogRef = this.dialog.open(ContactComponent, {
      width: '60%'
    })
  }

  homeClicked() {
    this.projectsIsClicked = false;
    this.skillsIsClicked = false;
    this.aboutIsClicked = false;
    this.contactIsClicked = false;
    this.homeIsClicked = true;
  }

  projectsClicked() {
    this.skillsIsClicked = false;
    this.aboutIsClicked = false;
    this.contactIsClicked = false;
    this.homeIsClicked = false;
    this.projectsIsClicked = true;
  }

  skillsClicked() {
    this.projectsIsClicked = false;
    this.aboutIsClicked = false;
    this.contactIsClicked = false;
    this.homeIsClicked = false;
    this.skillsIsClicked = true;
  }

  aboutClicked() {
    this.projectsIsClicked = false;
    this.contactIsClicked = false;
    this.homeIsClicked = false;
    this.skillsIsClicked = false;
    this.aboutIsClicked = true;
  }
}
