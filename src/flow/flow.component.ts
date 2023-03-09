import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class FlowComponent implements OnInit {
  constructor() {}
  getNumbers() {
    return [10, 3, 45, 0, 9, 12, 11];
  }
  ngOnInit() {}
}
