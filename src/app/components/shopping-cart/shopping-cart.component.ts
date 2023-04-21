import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {Router} from "@angular/router";
import { ProductService } from '../../service/product.service';
import { SaleService } from '../../service/sale.service';
import { DilogGenericComponent } from '../dilog-generic/dilog-generic.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  userForm: FormGroup;
  listForm: FormGroup;
  productForm: FormGroup;
  public sessionStr;
  listProduct : any [] = [];
  list_search: any ;
  total_products: number = 0;
  customer_documenttype :any;
  customer_document: any;
  constructor(public dialog: MatDialog,private saleService: SaleService, private fb: FormBuilder,private productService: ProductService,

    private router: Router) {
      this.sessionStr = sessionStorage;

      this.userForm = this.fb.group({
        product_name: [''],
        amount: [''],
        unit_price: [''],
        customer_documenttype : [''],
        customer_document : [''],
      });

      this.productForm = this.fb.group({
        product_id: [''],
        units: [''],
        unit_price: [''],

      });


      this.listForm = this.fb.group({
        customer_documenttype: this.userForm.get("customer_documenttype"),
        customer_document: this.userForm.get("customer_document"),
        location_id: sessionStorage.getItem('locationvalue'),
        products: this.fb.array([
        ])
      });


  }

  ngOnInit(): void {
   // this.getinfoProduct();
  }

  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  getinfoProduct(name_produt: string):void{
      this.productService.getinforProduct(name_produt).then((res) =>{
      this.list_search = res.data.data;
      this.userForm.patchValue({unit_price: (res.data.data[0].max_price)}) ;
      this.productForm.patchValue({product_id: (res.data.data[0].product_id)}) ;
      this.productForm.patchValue({unit_price: (res.data.data[0].max_price)}) ;


    }).catch(err =>{
      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
  }

  search(value: any){
    this.getinfoProduct(value);
  }

  addProduct(){
    console.log("La cantidad es:");
    console.log(this.userForm.value.amount);
    var cantidad =  this.userForm.value.amount;
    var precio =  this.userForm.value.unit_price;
    var document_type =  this.userForm.value.customer_documenttype;
    var document_number =  this.userForm.value.customer_document;

    console.log("documentos");
    console.log(document_type);
    console.log(document_number);

   var total =  cantidad*precio;
   this.userForm.patchValue({unit_price: precio*cantidad}) ;
   this.productForm.patchValue({customer_documenttype: document_type }) ;
   this.productForm.patchValue({customer_document: document_number}) ;

   this.productForm.patchValue({units: cantidad}) ;

    this.listProduct.push(this.userForm.value);
    this.totalListadd();
    this.userForm.reset();
    this.userForm.value.customer_document;
    this.products.push(this.productForm);
    //verificar con if la cantidad antes de darle el push para poder controlar als cantidades
    console.log("listaaaaaaaaaa");
    console.log(this.listProduct);
  }

  get products(){
    return this.listForm.get('products') as FormArray;
  }

  eviarAll(){
    console.log("se envio todo");
    console.log(this.listForm.value);
    if (this.userForm.valid) {
      this.saleService.addSale(this.listForm.value).then((resp:any)=> {
        console.log("RESPUESTA SERVIDOR");
        console.log(resp.data.data);
        console.log("ENCRIPTA");
        this.openDialog("Venta Registrada")
        window.location.reload();

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
      this.userForm.markAllAsTouched();
       this.openDialog("Error")
      console.log(this.userForm.markAllAsTouched());

    }
  }

  totalListadd(){
  for (let index = 0; index < this.listProduct.length; index++) {
    var element = this.listProduct[index];
  }
  this.total_products += element.unit_price;
  }

  totalListrest(elemento: number){
    var temp : number;
    for (let index = 0; index < this.listProduct.length; index++) {
      var element = this.listProduct[elemento];
    }
    this.total_products = (this.total_products-element.unit_price) ;

    }

  deleteProduct(elemento: number){
    this.totalListrest(elemento);
    this.listProduct.splice(elemento, 1);
  }

  openDialog(message : string):void {
    const dialogref = this.dialog.open(DilogGenericComponent,{data:message });
  }
}
