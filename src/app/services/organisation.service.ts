import { Injectable } from '@angular/core';
import { Datastore } from './datastore';
import { JsonApiQueryData } from 'angular2-jsonapi';

import { Organisation } from '../models/index';

import 'rxjs/add/operator/map';

@Injectable()
export class OrganisationService {
  constructor(
    private datastore: Datastore) {
  }
}
