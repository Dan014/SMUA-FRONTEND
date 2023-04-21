import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../service/request.service';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {Router} from "@angular/router";
import { UserService } from '../../service/user.service';
import * as CryptoJS from 'crypto-js';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  public sessionStr;
  key = 'encrypt_secret_with_long_lenght';
  require : any
  userForm: FormGroup;
  public submitted: Boolean = false;
  password! : string


  constructor(private fb: FormBuilder,
  private router: Router,private userService: UserService ,public dialog: MatDialog  ) {
    this.sessionStr = sessionStorage;
      this.userForm = this.fb.group({
        first_name: ['',[Validators.required,Validators.minLength(3)]],
        last_name: ['',[Validators.required,Validators.minLength(3)]],
        email: ['',[Validators.required,Validators.minLength(3),Validators.email]],
        phone_number: ['',Validators.minLength(10)],
        state: true,
        document_number: ['',Validators.required],
        is_admin: [Validators.required],
      });
  }

  ngOnInit() {
  }
  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
  getValue(value: string): AbstractControl{
    return this.userForm.get(value) as AbstractControl;
  }
  validateControl(value: string, validator : string){
    const val = this.userForm.get(value) as AbstractControl;
    if (val.invalid && val.touched || val.dirty) {

    }
    return (val.invalid && val.touched || val.dirty)
  }

  validateControl2(value: string, validator : string){
    const val = this.userForm.get(value) as AbstractControl;
    return (val.errors && val.errors[validator])
  }
  validateControl3(value: string, validator : string){
    const val = this.userForm.get(value) as AbstractControl;
    return (val.errors && val.errors.minLength)
  }
  onSubmit(): void {
    console.log(this.userForm);
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).then((resp:any)=> {
        console.log("RESPUESTA SERVIDOR");
        console.log(resp.data.data);
        console.log("ENCRIPTA");
        this.encriptar(resp.data.data);
        this.openDialog("Password: "+this.password)
      })
      .catch(err => {
        if(err.response)
        {
          let errorMessage = err.response.data.data
          console.log(errorMessage);
          console.log(err);
          this.openDialog(err)

        }
      })

    }else {
      this.userForm.markAllAsTouched();
    //  this.openDialog("Campos Incompletos")
      console.log(this.userForm.markAllAsTouched());

    }
  }


  encriptar(value : string){
    //var ciphertext = CryptoJS.AES.encrypt(value, 'secret key 123').toString();
   // console.log(ciphertext);
    var des = CryptoJS.AES.decrypt(value, 'encrypt_secret_with_long_length!');
    var originalText = des.toString(CryptoJS.enc.Utf8);
    this.password = originalText.substring(originalText.lastIndexOf("password")+11,originalText.length-2);
   // console.log(originalText);
   // console.log(originalText.lastIndexOf("password")+11);
   // console.log(originalText.substring(originalText.lastIndexOf("password")+11,originalText.length-2));
   // console.log("funciona");
  }

  openDialog(message : string):void {
    const dialogref = this.dialog.open(DialogComponent,{data:message });
  }



}
