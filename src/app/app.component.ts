import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PersonalPortfolio';

  hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger')
  mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')
  header = document.querySelector('.header.container')

  //hamburger.addEventListener('click',() => {
  //hamburger.classList.toggle('active')
  //})

}
