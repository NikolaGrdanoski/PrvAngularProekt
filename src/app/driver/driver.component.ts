import { Component, Input, OnInit, Output } from '@angular/core';
import { Driver } from '../module/klasa';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';
import { DRIVERS } from '../../db-data';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})

export class DriverComponent implements OnInit {

  constructor() { }

  @Input()
  ime:String = "";

  @Input()
  vozac:Driver = {} as Driver;

  @Input()
  reden:Number = 0;

  @Output()
  sofer:Driver;
  
  @Output()
  cuci = new EventEmitter<any>();

  ngOnInit() { }

  klasi() {
    return {'poz':this.vozac.category=="INTERMEDIATE", 'course-card':true}
  }

  klik() {
    var link = "https://www.f1.com/";
    window.open(link, "_blank");
    console.log("Me klikna");
    this.cuci.emit(this.vozac);
  }
}
