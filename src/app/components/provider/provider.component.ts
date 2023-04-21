import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  public sessionStr;

  message : string = "991021"

  constructor(public dialog: MatDialog) {
    this.sessionStr = sessionStorage;

   }

  ngOnInit(): void {
  }

  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  openDialog():void {
    const dialogref = this.dialog.open(DialogComponent,{data: 'HOLA  '+this.message });
  }
}




