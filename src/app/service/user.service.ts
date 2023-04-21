import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';
import { AxiosInstance } from "axios";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private axiosClient: AxiosInstance;
  private dateiduser! : number;
  private test : number = 3;
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

  public async getAllUsers<T>()  {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    return this.axiosClient.get(environment.urlbase+'user/',
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
    return this.axiosClient.get(environment.urlbase+'user/'+id,
    {
      params: {
        owner_id: owner
      }
    });
  }

  public async getdeleteUser<T>(id:any)  {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("el id es: " + id);
    console.log("el owner es  " + owner);

    return this.axiosClient.put(environment.urlbase+'user/'+id,null,{
      params: {
        owner_id: owner
      }
    }).then((resp:any) =>{
      this.userData = resp;
      console.log("la respuesta es"+ resp.data.data[0]);

    }) .catch(err => {
      if(err.response)
      {
        let errorMessage = err.response.data.data
        console.log(errorMessage);
      }
    });
  }

  public async addUser<T>( data: Object ) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("los datos son"+data);
    return this.axiosClient.post(environment.urlbase+"user/", data,{
      params: {
        owner_id: owner
      }

    });
   }


   public async uppDateUser<T>( data: Object ) {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("los datos son"+data);
    return this.axiosClient.put(environment.urlbase+"user/", data,{
      params: {
        owner_id: owner
      }

    });
   }


   public  getNameUser(): string {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).username;
    return owner
   }

   public  getRoleUser(): string {
    var result_role! : string;
    let user_data = sessionStorage.getItem('user_data');
    let rol = JSON.parse(user_data!).is_admin;
    if (rol == true)
      {
        result_role = "Administrador"
      }

    if (rol ==false) {
      result_role = "Empleado"
    }
    return result_role

   }

   public  getRoleUserBoolean(): boolean {
    var result_role! : string;
    let user_data = sessionStorage.getItem('user_data');
    let rol = JSON.parse(user_data!).is_admin;
    return rol

   }
   public  getIdUser(id:any): number {
     this.dateiduser = id;
    return id
   }
   public  getIdUsers(): number {
     console.log("resultado");
     console.log(this.dateiduser);

    return this.dateiduser
   }

}
