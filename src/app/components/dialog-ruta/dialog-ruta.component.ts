import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ruta',
  templateUrl: './dialog-ruta.component.html',
  styleUrls: ['./dialog-ruta.component.css']
})
export class DialogRutaComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<DialogRutaComponent>,@Inject(MAT_DIALOG_DATA) public message :string) { }

  ngOnInit(): void {
  }

}
