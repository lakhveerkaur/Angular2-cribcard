import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import {CribsService} from './../services/cribs.service';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

cribs: Array<any>;

  constructor(private http: Http,private cribService :CribsService) { }

  ngOnInit() {
    this.cribService.getAllCribs()
        .subscribe(data =>this.cribs=data);

    this.cribService.newCribSubject.subscribe(
      data => this.cribs =[data, ...this.cribs]
    );
  }

}
