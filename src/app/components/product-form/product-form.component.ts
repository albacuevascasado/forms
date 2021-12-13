import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  emailCtrl = new FormControl('',[Validators.required, Validators.minLength(6)]);

  constructor() { }

  ngOnInit(): void {
    this.emailCtrl.valueChanges
    .pipe(debounceTime(400))
    .subscribe((value) => console.log(value));
  }

  getEmail(event: Event){
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }

}


