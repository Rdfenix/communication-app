import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-intern',
  templateUrl: './name-intern.component.html',
  styleUrls: ['./name-intern.component.css'],
})
export class NameInternComponent implements OnInit {
  private _name: string = '';

  @Input()
  set name(name: string) {
    this._name = `Your Name: ${name}`;
  }

  get name(): string {
    return this._name;
  }

  constructor() {}

  ngOnInit(): void {}
}
