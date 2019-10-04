import { Injectable } from '@angular/core';

import { ApiService } from '@services/api/api.service';

import { environment } from '@env/environment';

import { User, UserData } from '@models/user.model';

import { Observable } from 'rxjs';

@Injectable()
export class TablesService {
  private environment = environment;

  constructor(
    private apiService: ApiService
  ) {}

  getUsers(page: number, perPage: number): Observable<User[]> {
    return this.apiService.get('https://gorest.co.in/public-api/users?_format=json', {
      'access-token': this.environment.accessToken,
      currentPage: page,
      perPage
    }).pipe(

    );
  }
}
