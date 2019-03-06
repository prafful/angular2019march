import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'cts-remote-api',
  templateUrl: './remote-api.component.html',
  styleUrls: ['./remote-api.component.css']
})
export class RemoteApiComponent implements OnInit {

  allUsers:any

  constructor(private rest:RestapiService) { }

  ngOnInit() {
    this.rest.getRemoteData().subscribe((res)=>{
      this.allUsers = res
      console.log(this.allUsers)
    })
  }

}
