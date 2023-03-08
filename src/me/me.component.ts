import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  standalone: true,
})
export class MeComponent implements OnInit {
  myName: string;
  constructor() {
    this.myName = 'Victoria';
  }

  ngOnInit() {}
}
