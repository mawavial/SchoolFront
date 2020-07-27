import { Injectable } from '@angular/core';
import { Observable, of, ObservableLike } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment'

import { School } from '../../interfaces/school';
import { MessageService } from '../messageService/message.service'

const path = environment.apiEndpoint + 'School';  // URL to web api

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

/** GET every single school */
  getAll(): Observable<School[]> {
    this.log('SchoolService: fetched schools');
    return this.http.get<School[]>(`${path}/GetAll`, { headers: headers })
      .pipe(
        tap(_ => this.log('fetched schools')),
        catchError(this.handleError<School[]>('getAll Schools', []))
      );
  }

  /** GET school by id. Will 404 if id not found */
  getById(id: number): Observable<School> {
    const url = `${path}/GetById?Id=${id}`;
    return this.http.get<School>(url, { headers: headers }).pipe(
      tap(_ => this.log(`fetched School id=${id}`)),
      catchError(this.handleError<School>(`getSchool id=${id}`))
    );
  }

  // /** PUT: update the hero on the server */
  // updateHero(hero: School): Observable<any> {
  //   return this.http.put(path, hero, { headers: headers }).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  /** POST: add a new school to the server */
  add(school: School): Observable<School> {
    return this.http.post<School>(`${path}/Add`, school, { headers: headers }).pipe(
      tap((school: School) => this.log(`added school w/ id=${school.id}`)),
      catchError(this.handleError<School>('addSchool'))
    );
  }

  /** DELETE: delete the school from the server */
  delete(school: School | number): Observable<School> {
    const id = typeof school === 'number' ? school : school.id;
    const url = `${path}/DeleteById?id=${id}`;
    return this.http.delete<School>(url, { headers: headers }).pipe(
      tap(_ => this.log(`deleted school id=${id}`)),
      catchError(this.handleError<School>('deleteSchool'))
    );
  }

  // /* GET heroes whose name contains search term */
  // searchHeroes(term: string): Observable<School[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<School[]>(`${path}/GetByName?name=${term}`).pipe(
  //     tap(x => x.length ?
  //       this.log(`found heroes matching "${term}"`) :
  //       this.log(`no heroes matching "${term}"`)),
  //     catchError(this.handleError<School[]>('searchHeroes', []))
  //   );

  private log(message: string) {
    this.messageService.add(`SchoolService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
