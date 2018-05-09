import { Component, OnInit } from '@angular/core';
import { Profile } from '@models/profile';
import { Datastore } from '../services/datastore';
import { JsonApiQueryData } from 'angular2-jsonapi';
import { Page } from '@models/page';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  page = new Page();
  rows = new Array<Profile>();
  columns = [
    { name: 'First name', prop: 'firstname' },
    { name: 'Last name', prop: 'lastname' },
    { name: 'Address 1', prop: 'address1' },
    { name: 'Address 2', prop: 'address2'},
    { name: 'Address 3', prop: 'address3'},
    { name: 'Postcode', prop: 'postcode'},
    { name: 'Email', prop: 'email'}
  ];

  constructor(private datastore: Datastore) {
    this.page.pageNumber = 1;
    this.page.size = 10;
    this.page.totalPages = 1;
    this.page.totalElements = 1;
    this.page.sortField = '';
    this.page.sortDirection = '';
  }

  ngOnInit() {
    this.setPage({ offset: 1 });
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    const params = { page: { size: this.page.size, number: this.page.pageNumber }, sort: ''};

    if (this.page.sortField) {
      if (this.page.sortDirection === 'desc') {
        params.sort = '-' + this.page.sortField;
      } else {
        params.sort = this.page.sortField;
      }
    }

    if (this.page.filterField && this.page.filterField !== '' && this.page.filterValue !== '') {
      params['filter'] = { lastname: this.page.filterValue };
    }

    this.datastore.findAll(Profile, params).subscribe(
      (profiles: JsonApiQueryData<Profile>) => {
        this.page.totalElements = profiles.getMeta().meta['total_record_count'];
        this.page.totalPages = profiles.getMeta().meta['page_count'];
        this.rows = profiles.getModels();
      }, (message) => {
        console.log('Failed to fetch profiles');
      }
    );
  }

  onSort(event) {
    this.page.sortField = event.column.prop;
    this.page.sortDirection = event.newValue;

    // event was triggered, start sort sequence
    this.setPage({ offset: 1});
  }

  updateFilter(event) {
    const val = event.target.value;
    console.log('Would filter First Name by |' + val + '|');

    if (val === '') {
      this.page.filterField = '';
      this.page.filterValue = '';
    }
    this.page.filterField = 'firstname';
    this.page.filterValue = val;
    this.setPage({offset: 1});
  }
}
