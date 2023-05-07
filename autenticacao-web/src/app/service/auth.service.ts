import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environment';
import {map} from 'rxjs/operators';
import {LoginDTO} from '../model/login.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(loginDTO: LoginDTO): Observable<any> {
    const email = loginDTO.email;
    return this.http.post(environment.hostUrl + '/login/authenticate', loginDTO, {responseType: 'text'})
      .pipe(map(response => {
          const token = response;
          if (token) {
            localStorage.setItem('currentUser', JSON.stringify({ email, token }));
          }
          return response;
        })
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return JSON.parse(currentUser);
    }
    return null;
  }

  isLoggedIn() {
    const currentUser = this.getCurrentUser();
    return currentUser && currentUser.token;
  }

  getAuthorizationToken() {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      return `Bearer ${currentUser.token}`;
    }
    return '';
  }
}
