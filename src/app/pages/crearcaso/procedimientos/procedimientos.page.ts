import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Procedimiento } from '../../../interfaces/interfaces';
@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.page.html',
  styleUrls: ['./procedimientos.page.scss'],
})
export class ProcedimientosPage implements OnInit {
  procedimientos: Procedimiento[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.procedimientos = this.dataService.getProcedimientos()
  }

  SetProc(event) {
    let anything
    if (event.detail.checked) {
      anything = this.dataService.setProc(event.detail.value)
    } else {
      anything = this.dataService.delProc(event.detail.value)
    }
  }
}
