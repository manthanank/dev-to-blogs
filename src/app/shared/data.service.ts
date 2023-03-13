import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getBlogDetails(data: any) {
    return this.http.get('https://dev.to/api/articles?username=' + data);
  }
}
