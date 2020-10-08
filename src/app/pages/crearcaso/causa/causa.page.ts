import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-causa',
  templateUrl: './causa.page.html',
  styleUrls: ['./causa.page.scss'],
})
export class CausaPage implements OnInit {
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
        this.navCtrl.navigateRoot('crearcaso/expgeneral');
        break;
      case '2':
        this.cod_causa = cod_causa
        this.dataService.causatrauma = []
        this.dataService.causaobstetrico = undefined
        this.dataService.setCausa(this.cod_causa)
        this.navCtrl.navigateRoot('crearcaso/expgeneral');
        break;
      case '3':
        this.cod_causa = cod_causa
        this.dataService.setCausa(this.cod_causa)
        this.navCtrl.navigateRoot('crearcaso/causa/trauma');
        break;
      case '4':
        if (this.dataService.gp == '2') {
          this.cod_causa = cod_causa
          this.dataService.setCausa(this.cod_causa)
          this.navCtrl.navigateRoot('crearcaso/causa/obstetrico');
        }
        break;
      case '5':
        this.cod_causa = cod_causa
        this.dataService.causatrauma = []
        this.dataService.causaobstetrico = undefined
        this.dataService.setCausa(this.cod_causa)
        this.navCtrl.navigateRoot('crearcaso/expgeneral');
        break;
      default:
        break;
    }
  }
}
