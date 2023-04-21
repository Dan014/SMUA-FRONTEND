import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.css']
})
export class ExchangesComponent implements OnInit {
  public sessionStr;

  constructor() {
    this.sessionStr = sessionStorage;

  }

  ngOnInit(): void {
  }

}
