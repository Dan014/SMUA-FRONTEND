import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  public sessionStr;
  userData : any={};
  data : number = this.userService.getIdUsers();
  userForm: FormGroup;
  result_role! : string;
  result_role_boolean! : boolean;

  constructor(private fb: FormBuilder, private userService: UserService   ) {
    this.sessionStr = sessionStorage;
    this.userForm = this.fb.group({
      user_id : userService.getIdUsers(),
      first_name: [''],
      last_name: [''],
      email: [''],
      phone_number: [''],
      state: true,
      document_number: [''],
      is_admin: true
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
    this.userService.getUser(this.data).then(res =>{
    this.userData = res.data.data.person;
    this.userData.document_number = res.data.data.document_number;
    this.result_role_boolean = res.data.data.is_admin;
    console.log("estos datos se enviaron");
    console.log(res.data.data);

    console.log(res.data.data.is_admin);
    this.valid(res.data.data.is_admin);
    console.log(this.data);


    }).catch(err =>{

      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
  }


  upDateUser(){
    console.log("Actualizar");
    console.log(this.userForm);
    this.userService.uppDateUser(this.userForm.value);
  }


  valid(rol : boolean){

    if (rol == true)
      {
        this.result_role = "Administrador"
      }
    if (rol ==false) {
      this.result_role = "Empleado"
    }
  }

}
