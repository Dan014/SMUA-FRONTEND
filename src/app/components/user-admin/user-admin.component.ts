import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user-model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  public sessionStr;
  userData!: any ;
  idData : number = this.userService.getIdUsers();



  constructor(private userService: UserService,public dialog: MatDialog ) {
    this.sessionStr = sessionStorage;

   }

  ngOnInit(): void {
    this.getallUser()

  }
  sideBarOpen = true;
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  getallUser():void{
    this.userService.getAllUsers().then((res) =>{
      this.userData = res.data.data;


    console.log(this.userData);

    }).catch(err =>{
      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
  }
  openDialog(message : string):void {
    const dialogref = this.dialog.open(DialogComponent,{data:message });
  }

  getId(user:any):void{
    this.userService.getIdUser(user);
    console.log("user nece");
    console.log("mra e"+user);
  }

  getIddelete(user:any):void{
    console.log("eliminar");
    console.log(user);
    this.userService.getdeleteUser(user);
    this.openDialog("Usuario inactivado")
    this.getallUser();
    window.location.reload();
  }

  getIdActive(user:any):void{
    console.log(user);
    this.userService.getdeleteUser(user);
    this.openDialog("Usuario activado")
    this.getallUser();
    window.location.reload();
  }


}



interface userData{
  data :  {
    data : []
  }
}
