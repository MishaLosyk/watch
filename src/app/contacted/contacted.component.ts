import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'contacted',
  templateUrl: './contacted.component.html',
  styleUrls: ['./contacted.component.css']
})
export class ContactedComponent implements OnInit {

  constructor(public appc: AppComponent) {

  }

  ngOnInit(): void {
  }

}
