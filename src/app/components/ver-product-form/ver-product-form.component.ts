import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ver-product-form',
  templateUrl: './ver-product-form.component.html',
  styleUrls: ['./ver-product-form.component.css']
})
export class VerProductFormComponent implements OnInit {

  productData : any={};
  data : number = this.productService.getIdProduct();
  image: File | undefined;
  productForm: FormGroup;
  public sessionStr;

  constructor(private fb: FormBuilder, private productService: ProductService ) {
    this.sessionStr = sessionStorage;
    this.productForm = this.fb.group({
      product_id: productService.getIdProduct(),
      product_code:	 [''],
      product_description:	[''],
      min_price:	[''],
      max_price:	[''],
      purchase_price: [''],
      category_name: [],

      state: true,
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
    this.productService.getProduct(this.data).then(res =>{
    this.productData = res.data.data;

    this.productForm.patchValue({productimage_url:res.data.data.productimage_url});
    this.productForm.patchValue({category_name:res.data.data.category.category_name});
    console.log("DATOS ENVIADOS POR EL SERVIDOR");
    console.log(res.data.data);



    }).catch(err =>{

      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
  }


  upDateProduct(){
    console.log("Actualizar");
    console.log(this.productForm);
    this.productService.uppDateProduct(this.productForm.value,this.image);
    console.log("modificado");
  }





  capturarImagen(event: Event):any{
    let fileList: FileList | null = (<HTMLInputElement>event.target).files;
    if(fileList!.length > 0) {
        this.image = fileList![0];
    }
  }
}
