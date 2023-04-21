import { Injectable } from '@angular/core';
import axios from 'axios';
import { AxiosInstance } from "axios";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private axiosClient: AxiosInstance;
  private dateiduser! : number;
  private test : number = 3;
  private dataProduct! : number;

  userData : any={};

  constructor() {
    this.axiosClient = axios.create({
			timeout: 3000,
			headers: {
				"X-Initialized-At": Date.now().toString(),
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')

			}
		});
   }

   public async getAllSale<T>(location: any, date : any)  {
    console.log("esto es ");
     let user_data = sessionStorage.getItem('user_data');
     let owner = JSON.parse(user_data!).user_id;

     return this.axiosClient.get(environment.urlbase+"sale/",{
      params: {
        owner_id: owner,
        location_id: location,
        sale_date: date
      }

     });
   }

   public async addSale<T>( data: Object ) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("los datos son"+data);
    return this.axiosClient.post(environment.urlbase+"sale/", data,{
      params: {
        owner_id: owner
      }

    });
   }

   public async getSale<T>(id:number)  {
    console.log("nro enel get");
    let product_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(product_data!).user_id;
    console.log("id del producto"+id+ "id del owner " + owner);
    return this.axiosClient.get(environment.urlbase+'sale/'+id,
    {
      params: {
        owner_id: owner
      },headers:{
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    });
  }

  public async getUser<T>(id:number)  {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("el id pro " +id);
    return this.axiosClient.get(environment.urlbase+'user/'+id,
    {
      params: {
        owner_id: owner
      }
    });
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

}

