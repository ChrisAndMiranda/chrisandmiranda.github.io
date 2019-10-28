import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() scrollHeight: number;

  constructor() { }

  ngOnInit() {
  }

}
