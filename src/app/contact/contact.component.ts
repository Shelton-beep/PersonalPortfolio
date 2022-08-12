import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //grouping form input data together
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

}
