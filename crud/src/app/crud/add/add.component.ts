import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserapiService } from 'src/app/shared/userapi.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  userInput: FormGroup;
  constructor(private getDataService: UserapiService) {
    this.userInput = new FormGroup({
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      email : new FormControl(''),
      mobile : new FormControl(''),
      salary : new FormControl(''),
    })
   }

  ngOnInit(): void {
  }
  onSendUsserData(){
  this.getDataService.sendData(this.userInput.value).subscribe(data => {
    console.log(data);
  })
  console.log(this.userInput.value);
  }
}
