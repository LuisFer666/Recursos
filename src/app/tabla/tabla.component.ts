import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/tabla/datos.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  datos: any = []

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private service: DatosService) { }

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
      .datos()
      .subscribe((response: any) => {
        this.datos = response;
        this.dtTrigger.next(null);
      });
  }

}
