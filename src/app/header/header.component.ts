import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  homeIsClicked: boolean = false;
  projectsIsClicked: boolean = false;
  skillsIsClicked: boolean = false;
  aboutIsClicked: boolean = false;
  contactIsClicked: boolean = false;

  header_variable = false;
  menuVariable: boolean = false;

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {


    this.homeClicked();
    //document.body.scrollTo('hero');
  }

  //toggling the menu icon button to open or close 
  openMenu() {
    this.menuVariable = !this.menuVariable;
  }

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
    //this.router.navigate('/projects')
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
  contactClicked() {
    this.projectsIsClicked = false;
    this.contactIsClicked = true;
    this.homeIsClicked = false;
    this.skillsIsClicked = false;
    this.aboutIsClicked = false;
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
}


