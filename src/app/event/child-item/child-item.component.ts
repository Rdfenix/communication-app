import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css'],
})
export class ChildItemComponent implements OnInit {
  @Input() title: string;
  @Output() incHandle = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  btnClick(n: number) {
    this.incHandle.emit(n);
  }
}
