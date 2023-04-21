import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
export interface ProductElement{
  name:String;
  precio:number;
  codigo:String
}


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  productData!: any ;
  idData : number = this.productService.getIdProduct();
  public sessionStr;



  constructor(private productService: ProductService ) {
    this.sessionStr = sessionStorage;

   }

  ngOnInit(): void {
    this.getallProduct()
  }

  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  getallProduct():void{
    this.productService.getAllProduct().then((res) =>{
      this.productData = res.data.data;
      console.log("k");
      console.log(res.data.data);
      console.log(res.data.data[0].productimage_url);

    }).catch(err =>{
      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
  }

  getId(product:any):void{
    console.log("product nece");
    this.productService.getIdProducts(product);
    console.log("product nece");
    console.log("mira e"+product.product_name);
  }

  getIddelete(product:any):void{
    console.log("eliminar");
    console.log(product);
    this.productService.getdeleteProduct(product);
  }


}



interface userProduct{
  data :  {
    data : []
  }
}
