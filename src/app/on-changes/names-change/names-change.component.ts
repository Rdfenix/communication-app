import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-names-change',
  templateUrl: './names-change.component.html',
  styleUrls: ['./names-change.component.css'],
})
export class NamesChangeComponent implements OnInit, OnChanges {
  @Input()
  name: string;
  nameBefore: string;

  constructor() {}

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const { previousValue } = changes?.name;
    this.nameBefore = previousValue;
  }

  ngOnInit(): void {}
}
