import { Component } from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'films';
  line: boolean;
  line2: boolean;
  line3: boolean;

  constructor (private route: ActivatedRoute) {

    if(window.location.href.search('home') != -1) {this.line = true};
    if(window.location.href.search('about') != -1) {this.line2 = true};
    if(window.location.href.search('contacts') != -1) {this.line3 = true};

  }

 resetLine() {
   this.line = false;
   this.line2 = false;
   this.line3 = false;
 }


}
