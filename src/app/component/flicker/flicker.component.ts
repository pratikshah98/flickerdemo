import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flicker',
  templateUrl: './flicker.component.html',
  styleUrls: ['./flicker.component.css']
})
export class FlickerComponent implements OnInit {

  constructor(private _Route:Router) { }

  ngOnInit(): void {
  }
  
  OpenView(){
    this._Route.navigate(['/flickerdetail'])
  }

}
