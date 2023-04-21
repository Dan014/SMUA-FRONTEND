import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-edit-form-user',
  templateUrl: './edit-form-user.component.html',
  styleUrls: ['./edit-form-user.component.css']
})
export class EditFormUserComponent implements OnInit {
  public sessionStr;
  userData : any={};
  data : number = this.userService.getIdUsers();
  userForm: FormGroup;
  result_role! : string;
  constructor(private fb: FormBuilder, private userService: UserService ,public dialog: MatDialog  ) {
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
    console.log("estos datos se enviaron");
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
    this.openDialog("La informacion ha sido modificada")

  }

  openDialog(message : string):void {
    const dialogref = this.dialog.open(DialogComponent,{data:message });
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
