import { Component, OnInit } from '@angular/core';

import { Organisation } from '../models/index';
import { OrganisationService } from '../services/index';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { Datastore } from '../services/datastore';

@Component({
  moduleId: module.id,
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
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
