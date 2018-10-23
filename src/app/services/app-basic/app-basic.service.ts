import { OnInit, Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IMainMenu } from 'app/interfaces/main-menu';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AppBasicService implements OnInit {
  constructor(
    private http: HttpClient,
  ) {}

  ngOnInit() {}


  public getMainMenu(): Observable<IMainMenu[]> {
    return this.http.get<IMainMenu[]>('http://localhost:3004/menu')
      .pipe(
        catchError(this.handleError('getMainMenu', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
