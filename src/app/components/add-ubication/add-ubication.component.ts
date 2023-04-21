import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { DialogRutaComponent } from '../dialog-ruta/dialog-ruta.component';
import { MatDialog } from '@angular/material/dialog';
import { RequestService } from '../../service/request.service';

@Component({
  selector: 'app-add-ubication',
  templateUrl: './add-ubication.component.html',
  styleUrls: ['./add-ubication.component.css']
})
export class AddUbicationComponent implements OnInit {
  public sessionStr;
  productData : any={};
  data : number = this.productService.getIdProduct();
  image: File | undefined;
  ubicationForm: FormGroup;
  locationData!: any ;

  constructor(private requestService: RequestService,public dialog: MatDialog ,private fb: FormBuilder, private router: Router, private productService: ProductService ) {
    this.sessionStr = sessionStorage;
    this.ubicationForm = this.fb.group({
      product_id: productService.getIdProduct(),
      location_id: [''],
      units:	 [''],
    });
   }

  ngOnInit(): void {
    this.infoProduct();
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
  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  infoProduct():void{
    console.log("se envio un dato ubicac"+this.data);
    this.productService.getProduct(this.data).then(res =>{
    this.productData = res.data.data;
    console.log("estos datos se enviaron de ubicacion ");
    console.log(res.data.data);


    }).catch(err =>{

      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });

  }

  onSubmit():void{

    console.log("aqui entro en obj");
    console.log(this.ubicationForm);
    if (this.ubicationForm.valid) {

      this.productService.addUbication(this.ubicationForm.value).then((resp:any)=> {
        console.log("RESPUESTA SERVIDOR");
        console.log("enviamos esto ubicacion: " +this.ubicationForm.value.location_id);
        console.log("enviamos esto unidades: " +this.ubicationForm.value.units);
        console.log("enviamos esto cod producto: " +this.ubicationForm.value.product_id);
        this.openDialog("Cantidad agregado")

      })
      .catch(err => {
        if(err.response)
        {
          let errorMessage = err.response.data.data
          this.openDialog(errorMessage)

          console.log(errorMessage);
          console.log(err);
        }
      })

    }else {
      this.ubicationForm.markAllAsTouched();
    }
  }

  openDialog(message : string):void {
    const dialogref = this.dialog.open(DialogRutaComponent,{data:message });
  }



}
