import { Component, OnInit } from '@angular/core';
import { Report } from '@models/report';
import { Datastore } from '../services/datastore';
import { JsonApiQueryData } from 'angular2-jsonapi';
import {Page} from '@models/page';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {

  page = new Page();
  rows = new Array<Report>();

  constructor(private datastore: Datastore) {
    this.page.pageNumber = 1;
    this.page.size = 20;
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

    this.datastore.findAll(Report, params).subscribe(
      (reports: JsonApiQueryData<Report>) => {
        this.page.totalElements = reports.getMeta().meta['total_record_count'];
        this.page.totalPages = reports.getMeta().meta['page_count'];
        this.rows = reports.getModels();
      }, (message) => {
        console.log('Failed to fetch reports');
      }
    );
  }

  onSort(event) {
    this.page.sortField = event.column.prop;
    this.page.sortDirection = event.newValue;

    // event was triggered, start sort sequence
    this.setPage({ offset: 1});
  }
}
