import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Organisation } from '@models/organisation';
import { Report } from '@models/report';
import { Profile } from '@models/profile';

import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';

const config: DatastoreConfig = {
  baseUrl: '/api',
  models: {
    organisation: Organisation,
    profile: Profile,
    report: Report
  }
};

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  constructor(http: HttpClient) {
    super(http);
  }
}
