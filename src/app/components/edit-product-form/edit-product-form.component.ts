import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRutaComponent } from '../dialog-ruta/dialog-ruta.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {
  public sessionStr;

  productData : any={};
  data : number = this.productService.getIdProduct();
  image: File | undefined;
  productForm: FormGroup;
  categoryData!: any ;


  constructor(public dialog: MatDialog,private fb: FormBuilder, private productService: ProductService ) {
    this.sessionStr = sessionStorage;

    this.productForm = this.fb.group({
      product_id: productService.getIdProduct(),
      product_code:	 [''],
      product_name:	[''],
      product_description:	[''],
      min_price:	[''],
      max_price:	[''],
      purchase_price: [''],
      state: true,
      category_id:["SA"]
    });
   }

  ngOnInit(): void {
    this.onSubmit();
    this.getCategorySelect();
  }

  onSubmit():void{
    console.log("se envio un dato"+this.data);
    this.productService.getProduct(this.data).then(res =>{
    this.productData = res.data.data;
    this.productForm.patchValue({productimage_url:res.data.data.productimage_url});
    this.productForm.patchValue({category_id:res.data.data.category.category_id});
    console.log("estos datos se enviaron");
    console.log(res.data.data.category.category_name);

    }).catch(err =>{

      if(err.response.status == 401){
        let errorMessage = err.response.data.data
        console.log("Usuario no autorizado");
        this.openDialog(errorMessage)
      }



    });
  }
  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  getCategory(){
    console.log("se envio un dato"+this.data);
    this.productService.getProduct(this.data).then(res =>{
    this.productData = res.data.data;
    this.productForm.patchValue({productimage_url:res.data.data.productimage_url});
    this.productForm.patchValue({category_id:res.data.data.category.category_id});
    console.log("estos datos se enviaron");
    console.log(res.data.data.category.category_name);

    }).catch(err =>{

      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
  }

  getCategorySelect():void{
    this.productService.getCategory().then((res) =>{
      this.categoryData = res.data.data;

      console.log("LA CATEGORIA ES");
      console.log(res.data.data);

    }).catch(err =>{
      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
  }

  upDateProduct(){
    console.log(this.productForm);
    this.productService.uppDateProduct(this.productForm.value,this.image);
    this.openDialog("Producto Modificado")
  }

  capturarImagen(event: Event):any{
    let fileList: FileList | null = (<HTMLInputElement>event.target).files;
    if(fileList!.length > 0) {
        this.image = fileList![0];
    }
  }

  openDialog(message : string):void {
    const dialogref = this.dialog.open(DialogRutaComponent,{data:message });
  }

}
