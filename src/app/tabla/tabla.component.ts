import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { RecursosService } from '../services/tabla/recursos.service';
import { AllService } from '../services/areas/all.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  Recursos: Recurso[] = [];

  Areas: Area[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: RecursosService,
    private areasService: AllService,
    private ref: ChangeDetectorRef) { }

  parseArea(idArea: number): string {
    const area = this.Areas[idArea-1];
    return area.nombre;
  }

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
        this.dtTrigger.next(null);
      });
    
    this.areasService
      .getAll()
      .subscribe((response: Area[]) =>{
        this.Areas = response;
        console.log(this.Areas);
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

export interface Area {
  idArea: number;
  nombre: string;
}
