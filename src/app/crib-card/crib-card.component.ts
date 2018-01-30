import { Component, OnInit,Input } from '@angular/core';
import {Crib} from './../Crib'
@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

constructor() { }
@Input('crib') crib:Crib;
  ngOnInit() {

  }

}
