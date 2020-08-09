import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client.models';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css'],
})
export class InputBindingComponent implements OnInit {
  @Input() firstName: string;
  @Input('otherName') lastName: string;
  @Input() Age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      { id: 1, name: 'Rudnei', age: 29 },
      { id: 2, name: 'Marcos', age: 27 },
      { id: 3, name: 'Sueli', age: 63 },
      { id: 4, name: 'Ana', age: 24 },
    ];
  }

  ngOnInit(): void {}
}
