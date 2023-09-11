import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DumpService {
  constructor(private readonly http: HttpClient) {}

  loadData() {
    return this.http.get('../../assets/data.json');
  }
}
