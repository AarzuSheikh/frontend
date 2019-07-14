import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchText : string;
  public customerData : any;

  constructor() { }

  ngOnInit() {
    this.customerData = [
      {"name": 'Jhon', "Add": 'Travis', "type":'Chicken'},
      // {"name": 'Jhon', "Add": 'Mominpura', "type":'Chicken'},
      {"name": 'Sam', "Add":'Travis', "type":'Chicken'},
      {"name": 'Moti Mahal', "Add": 'Travis', "type":'Chicken' },
      {"name": 'Roast', "Add":'Travis', "type":'Chicken'},
      {"name": 'Behrouz', "Add":'Travis', "type":'Chicken'},
      {"name": 'Wakil', "Add": 'Travis', "type":'Chicken'},
      {"name": 'Jhon', "Add": 'Travis', "type":'Mutton'},
      // {"name": 'Jhon', "Add": 'Mominpura', "type":'Mutton'},
      {"name": 'Sam', "Add": 'Travis', "type":'Mutton'},
      {"name": 'Moti Mahal', "Add": 'Travis', "type":'Mutton' },
      {"name": 'Roast', "Add": 'Travis', "type":'Mutton'},
      {"name": 'Behrouz', "Add": 'Travis', "type":'Mutton'},
      {"name": 'Wakil', "Add": 'Travis', "type":'Mutton'}
    ];
  }

}
