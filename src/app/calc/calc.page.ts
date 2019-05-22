import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
})
export class CalcPage implements OnInit {
  achbrut:string;
  achnet:string;
  venteNet:string;
  remise:string;
  coeff:string;
  result1:number;

  constructor() { }

  ngOnInit() {
  }

  tauxForm(){
    this.result1 =  (1-parseFloat(this.achnet)/parseFloat(this.achbrut))*100;
    console.log();
  }
  
  prixAchnet(){
    console.log(parseFloat(this.achbrut)*(1-parseFloat(this.remise)));
  }

  prixVentenet(){
    console.log(parseFloat(this.achnet)*parseFloat(this.coeff));
  }

  coeffMulti(){
    console.log(parseFloat(this.venteNet)*(1-parseFloat(this.achnet)));
  }
}
