import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  name!: string;
  phoneNumber!: any;
  email!: string;
  message!: string;

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //grouping form input data together
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  submitForm() {
    const response = `My name is ${this.name}`
  }

}
