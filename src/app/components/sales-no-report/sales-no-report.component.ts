import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report.service';
import { RequestService } from '../../service/request.service';

import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sales-no-report',
  templateUrl: './sales-no-report.component.html',
  styleUrls: ['./sales-no-report.component.css']
})
export class SalesNoReportComponent implements OnInit {
  public sessionStr;
  locationData!: any ;
  moveForm: FormGroup;
  reportDataHistory!: any ;


  constructor(private reportService: ReportService,private fb: FormBuilder ,private requestService: RequestService) {
    this.sessionStr = sessionStorage;
    this.moveForm = this.fb.group({
      init_date: [''],
      last_date:['']
    });
  }

  ngOnInit(): void {
  }

  getallSale():void{

    console.log("PRUEBAAAAAAAAAAASSS");
    console.log();
    console.log(this.moveForm.value.init_date);

    this.reportService.getAllSalesNoRe(this.moveForm.value).then((res) =>{
      this.reportDataHistory = res.data.data.data;
      console.log("esto se recibio" + this.reportDataHistory);
    //console.log(res.data.data[0].createdAt);

    }).catch(err =>{
      if(err.response.status == 401)
      console.log("Usuario no autorizado");
    });
    }

    sideBarOpen = true;
    sideBarToggler(){
      this.sideBarOpen = !this.sideBarOpen;
    }
}
