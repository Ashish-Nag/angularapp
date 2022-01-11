import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  checkIfWorks(): void {
    console.log("Yes it works.");
  }

  getData(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }
}
