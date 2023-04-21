import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as CryptoJS from 'crypto-js';
import { MatDialog } from '@angular/material/dialog';
import {  DialogRutaComponent} from '../dialog-ruta/dialog-ruta.component';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})



export class AddProductComponent implements OnInit {
  public sessionStr;

  key = 'encrypt_secret_with_long_lenght';
  require : any
  productForm: FormGroup;
  public archivos: any = [];
  image: File | undefined;
  public submitted: Boolean = false;
  categoryData!: any ;

  constructor(public dialog: MatDialog ,private sanitizer: DomSanitizer,
     private fb: FormBuilder,
    private productService: ProductService) {
      this.sessionStr = sessionStorage;

      this.productForm = this.fb.group({
        product_code:	['',[Validators.required,Validators.minLength(3)]],
        product_name:	['',[Validators.required,Validators.minLength(3)]],
        description:	[''],
        min_price:	['',[Validators.required]],
        max_price:	['',[Validators.required]],
        purchase_price: ['',[Validators.required]],
        state: true,
        category_id:['RE',Validators.required]
      });
    }

  ngOnInit(): void {
    this.getCategory();
  }


  onSubmit():void{
    console.log(this.productForm);
    console.log("CREAR producto");
    if (this.productForm.valid) {

      this.productService.addProduct(this.productForm.value,this.image).then((resp:any)=> {
        console.log("RESPUESTA SERVIDOR CUANDO AGREGO UN PRODUCTO");
        console.log(this.image?.name);
        console.log(resp);
        this.openDialog("Producto agregado")

      })
      .catch(err => {
        if(err.response)
        {
          let errorMessage = err.response.data.data
          console.log(errorMessage);
          console.log(err);
          this.openDialog(errorMessage)
        }
      })

    }else {
      this.productForm.markAllAsTouched();
    }

  }


  getCategory():void{
    this.productService.getCategory().then((res) =>{
      this.categoryData = res.data.data;

      console.log("LA CATEGORIA ES");
      console.log(res.data.data);

    }).catch(err =>{
      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
  }


  capturarImagen(event: Event):any{
    let fileList: FileList | null = (<HTMLInputElement>event.target).files;
    if(fileList!.length > 0) {
        this.image = fileList![0];
    }
  }

  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  getValue(value: string): AbstractControl{
    return this.productForm.get(value) as AbstractControl;
  }
  validateControl(value: string, validator : string){
    const val = this.productForm.get(value) as AbstractControl;
    if (val.invalid && val.touched || val.dirty) {

    }
    return (val.invalid && val.touched || val.dirty)
  }

  validateControl2(value: string, validator : string){
    const val = this.productForm.get(value) as AbstractControl;
    return (val.errors && val.errors[validator])
  }
  validateControl3(value: string, validator : string){
    const val = this.productForm.get(value) as AbstractControl;
    return (val.errors && val.errors.minLength)
  }

  openDialog(message : string):void {
    const dialogref = this.dialog.open(DialogRutaComponent,{data:message });
  }

}
