import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  formData: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      'firstname': new FormControl(''),
      'lastname': new FormControl('')
    });
  }

  ngOnInit(): void {}

  collectData(){
    console.log(this.formData.value);
  }
}
