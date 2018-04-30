import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Organisation } from '../models/organisation';

import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';

const config: DatastoreConfig = {
  baseUrl: '/api',
  models: {
    audit_type: Organisation,
  }
};

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  constructor(http: HttpClient) {
    super(http);
  }
}
