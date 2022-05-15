import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataType } from '../shared/user.model';
import { UserapiService } from '../shared/userapi.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
    listUsers:any;
    // userId:any = '';
  constructor(private getdataservice: UserapiService) { 
   }

  ngOnInit(): void {
   
  }
   

}