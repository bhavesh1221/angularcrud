import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserapiService } from 'src/app/shared/userapi.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  userId: any;
  userDetails: any;
  formData: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  })
  pass: boolean = true;
  viewUsers:string ='';
  constructor(private activatedRoute: ActivatedRoute, private getUserService: UserapiService, private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.viewUsers = data['id'];
    })
   
    // console.log("id",this.activatedRoute.snapshot.params['id']);
    this.getUserService.viewData(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      this.userDetails = data;
      this.formData = this.fb.group({
        firstname: new FormControl(this.userDetails.firstname),
        lastname: new FormControl(this.userDetails.lastname)
      })
    })
  }
  onUpdateUser(){
    this.getUserService.sendData(this.formData.value).subscribe(data => {
      console.log(data);
    })
    console.log(this.formData.value);
    // console.log(this.formData.value );
  } 

}
