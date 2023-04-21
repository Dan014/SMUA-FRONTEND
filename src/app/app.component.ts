import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css'] ,

})
export class AppComponent implements OnInit {
  public sessionStr;

  constructor() {
    this.sessionStr = sessionStorage;
  }
  title = 'ProyectMua';

  sideBarOpen = true;




  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
  }



}
