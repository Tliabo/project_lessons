import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {
  @Input() header = '';
  open = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.open = !this.open;
  }
}
