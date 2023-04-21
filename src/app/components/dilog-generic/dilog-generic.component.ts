import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';

@Component({
  selector: 'app-dilog-generic',
  templateUrl: './dilog-generic.component.html',
  styleUrls: ['./dilog-generic.component.css']
})
export class DilogGenericComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<DilogGenericComponent>,@Inject(MAT_DIALOG_DATA) public message :string) { }

  ngOnInit(): void {
  }

}
