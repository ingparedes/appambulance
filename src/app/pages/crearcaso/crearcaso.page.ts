import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-crearcaso',
  templateUrl: './crearcaso.page.html',
  styleUrls: ['./crearcaso.page.scss'],
})
export class CrearcasoPage implements OnInit {

  constructor(private dataService: DataService,public menuCtrl: MenuController, public alertController: AlertController, private navCtrl:NavController) {}  

  ngOnInit() {
    if (this.dataService.userToken == '') {
      this.navCtrl.navigateRoot('login');
      this.menuCtrl.enable(false, 'sismenu');
    }else{
      this.presentAlertConfirm()
    }
  }


  async setCaso() {
    const alert = await this.alertController.create({
      cssClass: 'modalAdd',
      header: 'Caso Manual',      
      inputs: [
        {
          name: 'codecaso',                    
          type: 'number',
          placeholder: 'Código del Caso'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => {
            this.navCtrl.navigateRoot('inicio');            
          }
        }, {
          text: 'Iniciar Caso',
          handler: (res) => {
            if (res.codecaso != '') {
              this.dataService.codCaso = res.codecaso
              this.navCtrl.navigateRoot('crearcaso/infobasica');                                      
            }else{
              this.setCaso()
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({      
      header: 'Crear Caso',
      message: '¿Quieres Crear un nuevo Caso?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.navCtrl.navigateRoot('inicio');            
          }
        }, {
          text: 'Si',
          handler: () => {
            this.setCaso()
          }
        }
      ]
    });

    await alert.present();
  }
}
