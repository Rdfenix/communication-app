import { Component, OnInit } from '@angular/core';
import { ClientModel } from './client.model';
import { ItemClientComponent } from './item-client/item-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  name: string;
  age: number;

  clients: ClientModel[] = [];

  constructor() {}

  ngOnInit(): void {}

  save() {
    this.clients.push({ name: this.name, age: this.age });
    this.name = '';
    this.age = 0;
  }

  delete(index) {
    this.clients.splice(index, 1);
  }

  update(client: ClientModel, i) {
    this.clients[i].name = client.name;
    this.clients[i].age = client.age;
    // this.clients.map((item, index) => {
    //   if (index === i) {
    //     item.name = client.name;
    //     item.age = client.age;
    //   }

    //   return item;
    // });
  }
}
