import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.headers =  new HttpHeaders({'Content-Type': 'application/json'});
  }

  public get<T>(url: string, queryParameters?: object | string) {
    if (typeof queryParameters === 'object') {
      queryParameters = this.joinQueryParameters(queryParameters);

      if (url.search(/\?/g) === -1) {
        url += `?${queryParameters}`;
      } else {
        url += `&${queryParameters}`;
      }
    }

    return this.http.get(url, { headers: this.headers})
      .pipe(
        catchError(this.handleError.bind(this))
      );
  }

  private joinQueryParameters(parameters: object): string {
    const parametersArray = [];
    for (const parameterName of Object.keys(parameters)) {
      if (parameters[parameterName]) {
        parametersArray.push(`${parameterName}=${parameters[parameterName]}`);
      }
    }
    return parametersArray.join('&');
  }

  private handleError(error: HttpErrorResponse | any) {
    if (error && error.status) {
      switch (error.status) {
        case 401:
        case '401': {
          this.router.navigate(['/', 'sign_in']);
          break;
        }
        default: {
          console.warn(error.status);
        }
      }
      if (error.url) {
        error.urlApiInApiService = error.url;
      }
    }

    return observableThrowError(error);
  }
}
