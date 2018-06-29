import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  private URL: string = 'http://localhost:3000/users/';
  constructor(
    private http: HttpClient
  ) { }
  list() {
    return this.http.get(this.URL);
  }
  create(data) {
    return this.http.post(this.URL, data);
  }
  update(id, data) {
    return this.http.put(this.URL + id, data);
  }
  remove(id) {
    return this.http.delete(this.URL + id);
  }
  get(id) {
    return this.http.get(this.URL + id);
  }
  search(field, term) {
    return this.http.get(this.URL + `search/${field}/${term}`);
  }
}
