import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../service/report.service';
import { RequestService } from '../../service/request.service';

import { AbstractControl,FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  public sessionStr;
  locationData!: any ;
  moveForm: FormGroup;
  reportDataHistory!: any ;


  constructor(private reportService: ReportService,private fb: FormBuilder ,private requestService: RequestService) {
    this.sessionStr = sessionStorage;
    this.moveForm = this.fb.group({
      firstDate: [''],
      secondDate:['']
    });
  }

  ngOnInit(): void {
  }

  getallSale():void{

    console.log("PRUEBAAAAAAAAAAASSS");
    console.log();
    console.log(this.moveForm.value.firstDate);

    this.reportService.getAllSalRe(this.moveForm.value).then((res) =>{
      this.reportDataHistory = res.data.data;
      console.log("esto se recibio" + res.data);
      console.log("esto se recibio" + res.data.data.total);
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
