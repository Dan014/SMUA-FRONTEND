import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { AxiosInstance } from "axios";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private axiosClient: AxiosInstance;
  private dataProduct! : number;
  productData : any={};

  constructor() {
    this.axiosClient = axios.create({
			timeout: 3000,
			headers: {
				"X-Initialized-At": Date.now().toString(),
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')

			}
		});

  }

  public async getAllProduct<T>()  {
   console.log("esto es ");
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    return this.axiosClient.get(environment.urlbase+'product/',
    {
      params: {
        owner_id: owner

      },headers:{
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }

    });
  }

  public async getProduct<T>(id:number)  {
    console.log("nro enel get");
    let product_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(product_data!).user_id;
    console.log("id del producto"+id+ "id del owner " + owner);
    return this.axiosClient.get(environment.urlbase+'product/'+id,
    {
      params: {
        owner_id: owner
      },headers:{
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    });
  }

  public async getCategory<T>()  {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    return this.axiosClient.get(environment.urlbase+'product_category'  ,
    {
      params: {
        owner_id: owner
      }
    });
  }
  public async getdeleteProduct<T>(id:any)  {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    return this.axiosClient.put(environment.urlbase+'user/'+id,null,{
      params: {
        owner_id: owner
      }
    }).then((resp:any) =>{
      this.productData = resp;
      console.log("la respuesta es"+ resp.data.data[0]);

    }) .catch(err => {
      if(err.response)
      {
        let errorMessage = err.response.data.data
        console.log(errorMessage);
      }
    });
  }

  public async addProduct<T>( data: Object , image: File | undefined) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    let formData: FormData = new FormData();
    if(image !== null && image !== undefined){
      formData.append('product_image', image, image.name);
		}
    formData.append('product', JSON.stringify(data));
    console.log("LA DATE ES")
    console.log(formData)

    return this.axiosClient.post(environment.urlbase+"product/", formData, {
      params: {
        owner_id: owner
      }
    }).catch(err=>{
      console.log(err);
    });
   }

   public async addUbication<T>( data: Object) {
     console.log("entro a addubi");
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("el id wo " +data.toString());
    return this.axiosClient.put(environment.urlbase+"product/add/", data, {
      params: {
        owner_id: owner
      }
    }).catch(err=>{
      console.log(err);
    });
   }

   public async uppDateProduct<T>( data: Object , image: File | undefined) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("los datos son"+data);
    let formData: FormData = new FormData();
    if(image !== null && image !== undefined){
      formData.append('product_image', image, image.name);
		}
    console.log("el id del admin " + owner);
    formData.append('product', JSON.stringify(data));
    return this.axiosClient.put(environment.urlbase+"product/", formData, {
      params: {
        owner_id: owner
      }
    }).catch(err=>{
      console.log(err);
    });
   }

   public  setidProduct(id:any): number {
    this.dataProduct = id;
   return id
  }
  public  getIdProduct(): number {
    console.log("resultado epico");
    console.log(this.dataProduct);
   return this.dataProduct
  }

  public  getIdProducts(id:any): number {
    this.dataProduct = id;
   return id
  }


  public async getinforProduct<T>(name_produt : string)  {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    return this.axiosClient.get(environment.urlbase+'product/',
    {
      params: {
        owner_id: owner,
        product_name : name_produt
      },headers:{
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    });
  }



}
