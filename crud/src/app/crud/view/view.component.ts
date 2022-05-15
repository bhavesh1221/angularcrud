import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserapiService } from 'src/app/shared/userapi.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  viewUsers:string ='';
  showData:any;
  constructor(private getdataservice: UserapiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.viewUsers = data['id'];
    })
    this.getdataservice.viewData(this.viewUsers).subscribe(data => {
      // console.log(data);
      this.showData = data;
    })

  }
}