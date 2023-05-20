import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recurso } from 'src/app/tabla/tabla.component';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient) { }

  recursos() {
    // 'http://ferbserver.ddns.net:7116/recurso/recursos'
    return this.http.get<Recurso[]>('https://github.com/LuisFer666/LaborCamp/raw/main/JSON/getAllRecursos.json')
  }
}
