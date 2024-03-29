import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin']);
  }

  login({ uname, password }: any): Observable<any> {
    if ( uname === 'anupam' && password === '123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ uname: 'anupam', email: 'pom@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
