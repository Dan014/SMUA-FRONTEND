import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../service/sale.service';
import { RequestService } from '../../service/request.service';

import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sale-history',
  templateUrl: './sale-history.component.html',
  styleUrls: ['./sale-history.component.css']
})
export class SaleHistoryComponent implements OnInit {
  public sessionStr;
  locationData!: any ;
  locationForm: FormGroup;
  saleDataHistory!: any ;


  constructor(private saleService: SaleService,private fb: FormBuilder ,private requestService: RequestService) {
    this.sessionStr = sessionStorage;
    this.locationForm = this.fb.group({
      location_select: [''],
      date:['']
    });
    this.getallLocation();
  }

  ngOnInit(): void {
  }

  getallSale():void{

    console.log("PRUEBAAAAAAAAAAASSS");
    console.log();
    console.log(this.locationForm.value.date);

    this.saleService.getAllSale(this.locationForm.value.location_select,this.locationForm.value.date).then((res) =>{
      this.saleDataHistory = res.data.data;

      console.log(this.saleDataHistory);




    //console.log(res.data.data[0].createdAt);

    }).catch(err =>{
      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
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
   // sessionStorage.setItem('locationvalue', this.locationForm.value.location_select);
    console.log("sesion");
    console.log(sessionStorage.getItem('locationvalue'));




  }

  getId(product:any):void{
    console.log("product nece" + product);
    this.saleService.getIdProducts(product);
    console.log("product nece");
    console.log("mira e");
  }

  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
