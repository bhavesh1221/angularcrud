import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserapiService } from 'src/app/shared/userapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  listUsers: any;
  userId:any;
  constructor(private getdataservice: UserapiService,
    private activatedRoute: ActivatedRoute ) {
      // this.activatedRoute.params.subscribe(data=>{
      //   // this.userId = data.id;
      // })
     }

  ngOnInit(): void {
    this.getdataservice.getData().subscribe(data => 
      this.listUsers = data
    )}
    onCross(id:any){
      this.getdataservice.deleteUser(id).subscribe(data =>
        console.log("data has been deleted", data)
        )}
      
}
