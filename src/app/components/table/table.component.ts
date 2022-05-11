import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  people: any = [];

  constructor(private _peopleService: PeopleService) {
    _peopleService.getPeople().subscribe((p) => {
      this.people = p;
    });

    console.log(this.people);

  }

  ngOnInit(): void {
  }

}
