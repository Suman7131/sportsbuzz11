import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, debounce } from 'rxjs/operators';
import { of as observableOf, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/shared/models/login.model';
// import { environment } from '../../../environments/environment';

// import { Login } from '../../shared/models/login.model';
const credentialsKey = 'currentUser';

const httpOptions = {    
    
  headers: new HttpHeaders({    
    'Content-Type': 'application/json',    
    'Authorization': 'my-auth-token',    
    'Access-Control-Allow-Origin': '*',    
    'Access-Control-Allow-Credentials': 'true',    
    'Access- Control - Allow - Methods': 'GET, POST, OPTIONS',    
    'Access- Control - Allow - Headers' : 'Origin, Content - Type, Accept'    
  })    
};    


@Injectable()
export class AuthenticationService {
  
  constructor(private http: HttpClient) {
  }

  homeLogin(loginData: Login): Observable<any> {
    const href = `${environment.apiBaseUrl}`;
    return this.http.post<any>(href, loginData).pipe(
      tap(
        (data) => {
          if (data.status === 'success') {
            const storage = localStorage;
            storage.setItem(credentialsKey, JSON.stringify(data.response));
          }
          return data;
        }
      )
    );
  }

  contactLogin(loginData: Login): Observable<any> {
    const href = `${environment.apiBaseUrl}`;
    return this.http.post<any>(href, loginData).pipe(
      tap(
        (data) => {
          if (data.status === 'success') {
            const storage = localStorage;
            storage.setItem(credentialsKey, JSON.stringify(data.response));
          }
          return data;
        }
      )
    );
  }



  // contactLoginform(loginData): Observable<any> {
  //   return this.http.post<any>('/anonymous-user-query', loginData);
    
  // }

  // homeLoginform(loginData): Observable<any> {
  //   return this.http.put<any>('/send-link', loginData);
    
  // }

  // login(loginData: Login): Observable<any> {
  //   const href = `${environment.login}`;
  //   return this.http.post<any>(href, loginData).pipe(
  //     tap(
  //       (data) => {
  //         if (data.status === 'success') {
  //           const storage = localStorage;
  //           storage.setItem(credentialsKey, JSON.stringify(data.response));
  //         }
  //         return data;
  //       }
  //     )
  //   );
  // }

  logout(): Observable<boolean> {
    sessionStorage.removeItem(credentialsKey);
    localStorage.removeItem(credentialsKey);
    return observableOf(true);
  }

  // getUserInfo(): Observable<any> {
  //   const savedCredentials = this.getUser();
  //   return observableOf(savedCredentials);
  // }

  isLogin() {
    if (localStorage.getItem(credentialsKey)) {
      return true;
    }
    return false;

  }

  // getToken() {
  //   const savedCredentials = this.getUser();
  //   return savedCredentials && savedCredentials['ApiToken'];
  // }

  // getUserRole(): Observable<any> {
  //   const savedCredentials = this.getUser();
  //   return observableOf(savedCredentials['role']);
  // }

  // getUserType() {
  //   const savedCredentials = this.getUser();
  //   if (this.isLogin()) {
  //     return savedCredentials['role'];
  //   } else {
  //     return false;
  //   }


  // }

  // private getUser() {
  //   const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
  //   return JSON.parse(savedCredentials);
  // }

  setUser(user: any): void {
    localStorage.setItem(credentialsKey, JSON.stringify(user));
  }

}
