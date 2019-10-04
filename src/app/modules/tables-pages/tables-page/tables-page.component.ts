import { Component, OnInit, OnDestroy } from '@angular/core';

import { TablesService } from '../services/tables.service';

import { environment } from '@env/environment';

import { User } from '@models/user.model';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss']
})
export class TablesPageComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject<1>();
  private currentPage: number = 0;
  private perPage: number = 20;
  public users: User[] = [];

  constructor(
    private tablesService: TablesService
  ) {}

  ngOnInit() {
    this.getTableData();
  }

  getTableData(): void {
    this.tablesService.getUsers(this.currentPage, this.perPage)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe( data => {
        console.log(data);
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }

}

