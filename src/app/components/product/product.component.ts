import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public sessionStr;
  public productList : any;
  productData!: any ;
  idData : number = this.productService.getIdProduct();

  constructor(private productService: ProductService) {
    this.sessionStr = sessionStorage;
    this.getallProduct();
  }

  ngOnInit(): void {

  }

  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  getallProduct():void{
    this.productService.getAllProduct().then((res) =>{
      this.productData = res.data.data;
      console.log(res.data.data);

    console.log(this.productData);

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
