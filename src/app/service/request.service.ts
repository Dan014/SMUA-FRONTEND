import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AxiosInstance } from 'axios';
import axios from 'axios';
import {environment} from '../../environments/environment';


@Injectable({providedIn:'root'})
export class RequestService {

 private axiosClient! : AxiosInstance;
 userData : any={};

  constructor(private http: HttpClient) {

    this.initizalizeAxios();
    //this.getLocation();
  }


  public initizalizeAxios(){
    console.log(sessionStorage.getItem('token'), "token");

    this.axiosClient = axios.create({
      timeout:3000,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
				"X-Initialized-At": Date.now().toString(),
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
			}
    })


  }


  public async login<T>( data: Object ) : Promise<T> {
   return this.axiosClient.post(environment.urlbase+"auth", data)

  }

  public async getLocation<T>()  {
    let user_data = sessionStorage.getItem('user_data');
    let owner = JSON.parse(user_data!).user_id;
    console.log("EL ID DE LA PERSONAS ES "+ owner);

    let number = 1
    return this.axiosClient.get(environment.urlbase+'location',
    {
      params: {
        owner_id: owner
      }
    });
  }
}

