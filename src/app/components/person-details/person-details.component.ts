import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person: any = {};
  id: number = 0;

  constructor(private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

  ngOnInit(): void {

    this.peopleService.getPerson(this.id)
      .subscribe((response) => {
        this.person = response;
        console.log(this.person);
      })
  }

}
