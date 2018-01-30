import { Component, OnInit } from '@angular/core';
import {CribsService } from './../services/cribs.service';
@Component({
  selector: 'app-crib-form',
  templateUrl: './crib-form.component.html',
  styleUrls: ['./crib-form.component.css']
})
export class CribFormComponent implements OnInit {

  constructor(private cribsService: CribsService) { }

  ngOnInit() {
  }
  onCribSubmit(data):void{
  this.cribsService.addDetails(data);

}
}
