import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from '../../../../services/data.service';
@Component({
  selector: 'app-loadcausa',
  templateUrl: './loadcausa.page.html',
  styleUrls: ['./loadcausa.page.scss'],
})
export class LoadcausaPage implements OnInit {
  cod_causa: String;
  constructor(private navCtrl: NavController, private dataService: DataService) { }

  ngOnInit() {
  }

  SetCausa(cod_causa: String) {
    switch (cod_causa) {
      case '1':
        this.cod_causa = cod_causa
        this.dataService.causatrauma = []
        this.dataService.causaobstetrico = undefined
        this.dataService.setCausa(this.cod_causa)
        this.navCtrl.navigateRoot('asignados/cargar/expgeneral');
        break;
      case '2':
        this.cod_causa = cod_causa
        this.dataService.causatrauma = []
        this.dataService.causaobstetrico = undefined
        this.dataService.setCausa(this.cod_causa)
        this.navCtrl.navigateRoot('asignados/cargar/expgeneral');
        break;
      case '3':
        this.cod_causa = cod_causa
        this.dataService.setCausa(this.cod_causa)
        this.navCtrl.navigateRoot('asignados/cargar/causa/loadtrauma');
        break;
      case '4':
        if (this.dataService.gp == '2') {
          this.cod_causa = cod_causa
          this.dataService.setCausa(this.cod_causa)
          this.navCtrl.navigateRoot('asignados/cargar/causa/loadobstetrico');
        }
        break;
      case '5':
        this.cod_causa = cod_causa
        this.dataService.causatrauma = []
        this.dataService.causaobstetrico = undefined
        this.dataService.setCausa(this.cod_causa)
        this.navCtrl.navigateRoot('asignados/cargar/expgeneral');
        break;
      default:
        break;
    }
  }
}
