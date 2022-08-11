import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PersonalPortfolio';

  panelOpenState = false;

  //method to change the color of the nav bar when scroll is at 100px
  header_variable = false;
  @HostListener("document:scroll")
  scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.header_variable = true;
    }
    else {
      this.header_variable = false;
    }
  }
  /* End of method */

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


}
