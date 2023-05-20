import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Area } from 'src/app/tabla/tabla.component';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Area[]>('http://ferbserver.ddns.net:7116/area/areas');
  }
}
