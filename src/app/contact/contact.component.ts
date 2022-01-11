import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // * Making a variable for using angular form.
  personName = new FormControl('');

  // * variables for using reactive form module.
  personForm = new FormGroup({
    Name: new FormControl(''),
    Age: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {  }

  refreshValue(){
    this.personName.setValue('Meow Meow');
  }

  onSubmit(){
    console.log(this.personForm.value);
  }
}
