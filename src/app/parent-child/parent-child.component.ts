import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css'],
})
export class ParentChildComponent implements OnInit {
  @ViewChild(TimerComponent)
  private myTime: TimerComponent;

  @ViewChild('myPi')
  private myPi: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  start() {
    this.myTime.start();
  }

  stop() {
    this.myTime.stop();
  }

  clear() {
    this.myTime.clear();
  }

  ngAfterViewInit() {
    console.log(this.myPi);
  }
}
