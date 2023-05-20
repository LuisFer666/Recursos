import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recurso } from 'src/app/tabla/tabla.component';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient) { }

  recursos() {
    return this.http.get<Recurso[]>('http://ferbserver.ddns.net:7116/recurso/recursos')
  }
}
