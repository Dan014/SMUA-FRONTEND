import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  role : string = this.userService.getRoleUser();
  roleboolean : boolean = this.userService.getRoleUserBoolean()
  constructor(private  userService : UserService) { }

  ngOnInit(): void {
  }

}
