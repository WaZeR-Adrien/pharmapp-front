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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

      this.route.queryParams
          .subscribe(params => {
              this.achbrut = params.prix;
          });

  }

  tauxForm() {
    this.remise = ((1 - parseFloat(this.achnet) / parseFloat(this.achbrut)) * 100).toFixed(2);
  }

  prixAchnet() {
    this.achnet = (parseFloat(this.achbrut) * (1 - (parseFloat(this.remise) / 100))).toFixed(2);
  }

  prixVentenet() {
    this.venteNet = ((parseFloat(this.achnet) * parseFloat(this.coeff))).toFixed(2);
  }

  coeffMulti() {
    this.coeff = (parseFloat(this.venteNet) * (1 - parseFloat(this.achnet))).toFixed(2);
  }
}