import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { AxiosInstance } from "axios";


@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private axiosClient: AxiosInstance;
  private dataReport! : number;
  reportData : any={};

  constructor() {
    this.axiosClient = axios.create({
			timeout: 3000,
			headers: {
				"X-Initialized-At": Date.now().toString(),
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')

			}
		});

  }

public async getAllMoveReport<T>(dateini: any, datefin : any)  {
    console.log("esto es report movem ");
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    return this.axiosClient.get(environment.urlbase+"report/storage/movements",{
        params: {
            owner_id: owner,
            sale_date: dateini,
            date_finish:datefin
        }
    
    });
}

   public async getAllSalRe<T>( data: Object ) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("los datos son"+data);
    return this.axiosClient.get(environment.urlbase+"report/sellsTotalbyTime", {
      params: {
        owner_id: owner,
        data
      }
    });
   }

   public async getAllExpRe<T>( data: Object ) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("los datos son"+data);
    return this.axiosClient.get(environment.urlbase+"report/expensesByTime",{
      params: {
        owner_id: owner
        , data
      }

    });
   }

   public async getAllProfRe<T>( data: Object ) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("los datos son"+data);
    return this.axiosClient.get(environment.urlbase+"report/earningsByTime",{
      params: {
        owner_id: owner
        , data
      }

    });
   }

   public async getAllSalesNoRe<T>( data: Object ) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("los datos son"+data);
    return this.axiosClient.get(environment.urlbase+"report/unsoludProducts",{
      params: {
        owner_id: owner,
        data
      }

    });
   }

   public async getAllIncoRe<T>( data: Object ) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("los datos son"+data);
    return this.axiosClient.get(environment.urlbase+"report/earningsByProducts",{
      params: {
        owner_id: owner
        , data
      }

    });
   }

   public async getAllSalUbiRe<T>( data: Object ) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("los datos son"+data);
    return this.axiosClient.put(environment.urlbase+"report/sellsByLocation", data,{
      params: {
        owner_id: owner
      }

    });
   }

  



}
