import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  persons = [];

  constructor(
    private appService: AppService
  ) {}

  ngOnInit() {
    this.appService.getData().subscribe(data => {
      this.persons = data;
    });
  }

  remove(id) {
    this.persons = this.persons.filter(person => person.id !== id);
  }
}
