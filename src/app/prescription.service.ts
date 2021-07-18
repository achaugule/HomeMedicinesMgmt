import { Injectable } from '@angular/core';
import { Meds } from './Meds';
import { DOSES } from './mock-meds';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';
import { discardPeriodicTasks } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  medsUrl = 'http://localhost:8080/medicines'

   /**The web API expects a special header in HTTP save requests */
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // getPrescription(): Observable<Meds[]>{
  //   const doses = of(DOSES);
  //   console.log('Doses',doses);
  //   return doses;
  // }
  

  getPrescription(): Observable<Meds[]>{
     return this.http.get<Meds[]>(this.medsUrl)
     .pipe(
       tap(data => console.log(JSON.stringify(data))),
       catchError(this.handleError<Meds[]>('getPrescription',[]))
       );    
  }

  addPrescription(meds: Meds): Observable<Meds> {
    return this.http.post<Meds>(this.medsUrl, meds, this.httpOptions)
      .pipe(
        catchError(this.handleError('addPrescription', meds))
      );
  }

  /* GET medicines whose name contains search term */
searchMeds(term: string): Observable<Meds[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Meds[]>(`${this.medsUrl}/?name=${term}`).pipe(
    tap(data => console.log('My Data Object: ',JSON.stringify(data))),
    // tap(data => console.log('Returns all properties as an array',Object.getOwnPropertyNames(data))),
    // tap(data => console.log('Accessing Properties',Object.getOwnPropertyDescriptor(data, "data"))),
    map(data => {return Object.values(data)}),
    tap(data => console.log('post map 1: ',JSON.stringify(data))),
    //concat and reduce is equivalent to flat
    //map(data => {return data.concat(...data)}), 
    // map(data => {return data.reduce((acc, data) => {
    //   return acc.concat(data)
    //   }, data)
    // }),
    map(data => {return data.concat.apply([],data)}), //flatten array of arrays
    tap(data => console.log('post flattening arrays in map 2: ',JSON.stringify(data))),
    //tap(data => console.log('Values',Object.values(data).map(item => {return JSON.stringify(item)}))),
    catchError(this.handleError<Meds[]>('searchHeroes', []))
  );
}
 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
  };
}
}
