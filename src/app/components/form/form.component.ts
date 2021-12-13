import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup = new FormGroup({});
    

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['user@company.es', [Validators.email]],
      text: ['', [Validators.maxLength(20)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    //Reactive Way
    //this.form.valueChanges
    //.pipe(debounceTime(400))
    //.subscribe((value)=> console.log(value));
  }

  save(event:Event) {
    event.preventDefault();
    //double-check the form (recommended)
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }

  }

  doSomething(){
    alert("This e-mail already in use");
  }

  get nameField(){
    return this.form.get('name');
  }
  get dateField(){
    return this.form.get('date');
  }
  get emailField(){
    return this.form.get('email');
  }
  get textField(){
    return this.form.get('text');
  }
  get categoryField(){
    return this.form.get('category');
  }
  get genderField(){
    return this.form.get('gender');
  }

}
