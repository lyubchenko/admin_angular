import { Injectable } from '@angular/core';

import { ApiService } from '@services/api/api.service';

import { environment } from '@env/environment';

import { User, UserData } from '@models/user.model';
import { ResponseGorest } from '@models/response-gorest';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TablesService {
  private environment = environment;

  constructor(
    private apiService: ApiService
  ) {}

  getUsers(page: number, perPage: number): Observable<ResponseGorest> {
    return this.apiService.get<ResponseGorest>('https://gorest.co.in/public-api/users?_format=json', {
      'access-token': this.environment.accessToken,
      currentPage: page,
      perPage
    }).pipe(map((data: ResponseGorest) => data));
  }
}
