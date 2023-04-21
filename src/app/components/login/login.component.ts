import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {RequestService} from '../../service/request.service';
import { DilogGenericComponent } from '../dilog-generic/dilog-generic.component';
import { DialogLocationComponent } from '../dialog-location/dialog-location.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public submitted: Boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,private requestService: RequestService   ,public dialog: MatDialog ) {
      this.loginForm = this.fb.group({
        document_number: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  ngOnInit() {
    sessionStorage.clear();
    localStorage.clear();
  }

  onSubmit(): void {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      this.requestService.login(this.loginForm.value)
      .then((resp:any) => {
        let userData = {
          user_id: resp.data.data.user_id,
          username: resp.data.data.first_name+' '+resp.data.data.last_name,
          is_admin: resp.data.data.is_admin,
          document_number: resp.data.data.document_number
        }
        sessionStorage.setItem('token', resp.data.data.token);
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('user_data', JSON.stringify(userData));
        this.requestService.initizalizeAxios();
        this.router.navigateByUrl('/product');
        console.log("el ide es"+ sessionStorage.getItem('id_user'));
        this.openDialogLocation("Selecione ubicacion");
      })
      .catch(err => {
        if(err.response)
        {
          let errorMessage = err.response.data.data
          this.openDialog(errorMessage)
          console.log(errorMessage);
        }
      })

    }else {
      this.loginForm.markAllAsTouched();
      this.openDialog("Contraseña incorrecta")
    }

  }

 // Number only validation
     numeric(control: AbstractControl) {
      let val = control.value;

      if (val === null || val === '') return false;

      if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { true :  false};

      return null;
    }

    openDialog(message : string):void {
      const dialogref = this.dialog.open(DilogGenericComponent,{data:message });
    }

    openDialogLocation(message : string):void {

      const dialogref = this.dialog.open(DialogLocationComponent,{data:message ,disableClose: true });
    }


}
