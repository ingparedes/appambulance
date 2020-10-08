import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sismenu',
  templateUrl: './sismenu.component.html',
  styleUrls: ['./sismenu.component.scss'],
})
export class SismenuComponent implements OnInit {

  componentes: Observable<Componente[]>

  constructor(private dataService: DataService,
    public menuCtrl: MenuController) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  closeSisMenu() {
    this.menuCtrl.enable(false, 'sismenu');    
    this.dataService.turnoc = false
    this.dataService.userToken = undefined
  }

}
