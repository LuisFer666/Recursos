import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { RecursosService } from '../services/tabla/recursos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  Recursos: Recurso[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: RecursosService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json'
      }
    }
    this.getDatos();
  }

  getDatos(): void {
    this.service
      .recursos()
      .subscribe((response: Recurso[]) => {
        this.Recursos = response;
        this.ref.detectChanges();
        this.dtTrigger.next(null);
        console.table(this.Recursos);
        
        
      });
  }
}

export interface Recurso {
  idRecurso: number;
  nombre: string;
  idArea: number;
  idClasificacion: number;
  idNivel: number;
  link: string;
}
