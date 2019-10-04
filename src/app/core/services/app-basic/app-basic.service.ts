import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { ApiService } from '@services/api/api.service';

import { IMainMenu } from '@models/main-menu';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AppBasicService {
  constructor(
    private apiService: ApiService
  ) {}

  public getMainMenu(): Observable<IMainMenu[]> {
    return this.apiService.get<IMainMenu[]>('http://localhost:3004/menu').pipe(
      map( (response: IMainMenu[]) => response)
    );
  }

}
