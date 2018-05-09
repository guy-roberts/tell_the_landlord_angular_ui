import { Component, OnInit } from '@angular/core';
import { Organisation } from '../models';
import { OrganisationService } from '../services';
import { Datastore } from '../services/datastore';
import { JsonApiQueryData } from 'angular2-jsonapi';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.css']
})
export class OrganisationsComponent implements OnInit {
  organisations: Organisation[] = [];
  constructor(private organisationService: OrganisationService, private datastore: Datastore) { }

  ngOnInit() {
    this.datastore.findAll(Organisation, {
      page: { size: 10, number: 1 }
    }).subscribe(
      (organisations: JsonApiQueryData<Organisation>) => {
        this.organisations  = organisations.getModels();
      }
    );
  }
}
