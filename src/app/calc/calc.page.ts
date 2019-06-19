import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
})
export class CalcPage implements OnInit {
  achbrut: string;
  achnet: string;
  venteNet: string;
  remise: string;
  coeff: string;
  result1: number;
  result2: number;
  result3: number;
  result4: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

      this.route.queryParams
          .subscribe(params => {
              this.achbrut = params.prix;
          });

  }

  tauxForm() {
    this.result1 = (1 - parseFloat(this.achnet) / parseFloat(this.achbrut)) * 100;
  }

  prixAchnet() {
    this.result2 = (parseFloat(this.achbrut) * (1 - (parseFloat(this.remise) / 100)));
  }

  prixVentenet() {
    this.result3 = (parseFloat(this.achnet) * parseFloat(this.coeff));
  }

  coeffMulti() {
    this.result4 = (parseFloat(this.venteNet) * (1 - parseFloat(this.achnet)));
  }
}
