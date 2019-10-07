import { Component, OnInit, OnDestroy } from '@angular/core';

import { TablesService } from '../services/tables.service';

import { environment } from '@env/environment';

import {User, UserData} from '@models/user.model';
import { ResponseGorest } from '@models/response-gorest';

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
  public displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'dob', 'email', 'phone', 'status'];
  public columnsToDisplay: string[] = this.displayedColumns.slice();
  public resultsLength: number;

  constructor(
    private tablesService: TablesService
  ) {}

  ngOnInit() {
    this.getTableData();
  }

  getTableData(): void {
    this.tablesService.getUsers(this.currentPage, this.perPage)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe( (data: ResponseGorest) => {
        if (data && data.result && data._meta && data._meta.success && data.result.length) {
          this.resultsLength = data._meta.totalCount;
          this.users = data.result.map( (usersData: UserData) => {
            return User.fromJson(usersData);
          });
        }
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }

}

