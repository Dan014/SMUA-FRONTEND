import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../service/sale.service';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ver-sale',
  templateUrl: './ver-sale.component.html',
  styleUrls: ['./ver-sale.component.css']
})
export class VerSaleComponent implements OnInit {

  productData : any={};
  data : number = this.productService.getIdProduct();
  image: File | undefined;
  productForm: FormGroup;
  public sessionStr;

  constructor(private fb: FormBuilder, private productService: SaleService ) {
    this.sessionStr = sessionStorage;
    this.productForm = this.fb.group({
      sale_id: productService.getIdProduct(),
      customerdocument_type:	 [''],
      customer_document:	[''],
      sale_date:	[''],
      sale_price:	[''],
      user_id: [''],
      location_id: [''],
      product_code: [''],
      product_name: [''],
      units: [''],
      unit_price: ['']
    });
   }

  ngOnInit(): void {
    this.onSubmit();
  }
  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  onSubmit():void{
    this.productService.getSale(this.data).then(res =>{
    this.productData = res.data.data;
    console.log("DATOS ENVIADOS POR EL SERVIDOR");
    console.log(res.data.data);


    this.productService.getUser(this.productData.user_id).then((res) =>{
      console.log("lo que se viene pro" + res.data.data.first_name)
      this.productForm.patchValue({user_id: (res.data.data.first_name)}) ;
     


    }).catch(err =>{
      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });

    }).catch(err =>{

      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
  }




}
