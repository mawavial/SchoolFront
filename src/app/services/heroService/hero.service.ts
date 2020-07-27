import { Injectable } from '@angular/core';
import { Observable, of, ObservableLike } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment'

import { Hero } from '../../interfaces/hero';
import { MessageService } from '../messageService/message.service';

const path = environment.apiEndpoint + 'Hero';  // URL to web api
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
// const headers = new HttpHeaders().set('Accept', 'application/json')
const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});
let options = { headers: headers };



@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getHeroes(): Observable<Hero[]> {
    this.log('HeroService: fetched heroes');
    return this.http.get<Hero[]>(path, { headers: headers })
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );

  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${path}/'GetById'/${id}`;
    return this.http.get<Hero>(path, { headers: headers }).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(path, hero, { headers: headers }).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {

    console.log('%c⧭', 'color: #ffa640', hero);
    return this.http.post<Hero>(path, hero, { headers: headers }).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${path}?id=${id}`;

    return this.http.delete<Hero>(url, { headers: headers }).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${path}/GetByName?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }



  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
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
