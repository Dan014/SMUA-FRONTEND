import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { RequestService } from '../../service/request.service';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-location',
  templateUrl: './dialog-location.component.html',
  styleUrls: ['./dialog-location.component.css']
})
export class DialogLocationComponent implements OnInit {
  locationData!: any ;
  locationForm: FormGroup;

  constructor(private requestService: RequestService,
    public dialogref: MatDialogRef<DialogLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public message :string,private fb: FormBuilder) {
    this.locationForm = this.fb.group({
      location_select: ['1']
    });
    this.getallLocation();

  }

  ngOnInit(): void {
    this.getallLocation();
  }


  getallLocation():void{
    this.requestService.getLocation().then((res) =>{
      this.locationData = res.data.data;
      console.log(res.data.data);

    }).catch(err =>{
      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
  }

  getLocationselected(){
    var location : string;
    console.log("la ubicacion es");
    console.log(this.locationForm.value);
    location = this.locationForm.value.location_select
    console.log("alamaceno");
    console.log(location);

    sessionStorage.setItem('locationvalue', this.locationForm.value.location_select);

    console.log("sesion");
    console.log(sessionStorage.getItem('locationvalue'));




  }

}
