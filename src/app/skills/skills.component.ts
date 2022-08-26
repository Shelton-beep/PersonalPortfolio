import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  panelOpenState = true;

  languages: any = ['JavaScript', 'Typescript',
    'HTML | HTML5',
    'CSS',
    'ES6+',
    'Php',
    'MongoDB',
    'SQL',
    'Java'];

  frameworks: any = [
    'Angular',
    'ReactJS',
    'React Native',
    'Android',
    'Express'
  ];

  tools: any = [
    'Git',
    'Intelij IDEA',
    'Visual Studio Code',
    'NodeJS'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
