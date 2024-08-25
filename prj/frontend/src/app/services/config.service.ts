import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, Observable, of, tap } from 'rxjs';
import { ConfigItem } from './config-item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  API_URL = 'http://localhost:3000/configuration';
  API_SUBSCRIBE_URL = 'http://localhost:3000/subscribersBlock';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getAllPages(): Observable<ConfigItem[]> {
    return this.http.get<ConfigItem[]>(this.API_URL) ?? {};
  }

  getPageById(id: number): Observable<ConfigItem> {
    return this.http.get<ConfigItem>(`${this.API_URL}/${id}`) ?? {};
  }

  getPageByName(pageName: string): Observable<ConfigItem> {
    return this.http
      .get<ConfigItem>(this.API_URL)
      .pipe(filter((configItem) => configItem.name === pageName));
  }

  saveSubscriber(email: string): Observable<any> {
    return this.http.post<any>(`${this.API_SUBSCRIBE_URL}`, { email }).pipe(
      tap((post) => console.log(`this is a ${post}`)),
      catchError(this.handleError('Adding subscriber', []))
    );
  }
}
