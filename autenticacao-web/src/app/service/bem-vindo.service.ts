import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class BemVindoService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(environment.hostUrl + '/bem_vindo', {responseType: 'text'})
  }
}
