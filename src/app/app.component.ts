import { Component } from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor (private route: ActivatedRoute) {


  }


}
