import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any>= new EventEmitter();
  public sessionStr;

  constructor(private  userService : UserService) {
     this.sessionStr = sessionStorage;
   }
  nameUser : string = this.userService.getNameUser();

  ngOnInit(): void {

  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

  exit(){
   sessionStorage.clear();
   localStorage.clear();
  }
}
