import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../../../services/data.service';
@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.page.html',
  styleUrls: ['./cargar.page.scss'],
})
export class CargarPage implements OnInit {

  constructor(public alertController: AlertController, private navCtrl: NavController, private dataService:DataService) { }

  ngOnInit() {    
    this.presentAlertConfirm()
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({      
      header: 'Abrir Caso',
      message: '¿Quieres Abrir el Caso #'+this.dataService.codCaso+'?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.navCtrl.navigateRoot('inicio');  
            this.dataService.codCaso = ''          
            this.dataService.codHospital = ''          
          }
        }, {
          text: 'Si',
          handler: () => {
            this.navCtrl.navigateRoot('asignados/cargar/infobasica');            
          }
        }
      ]
    });

    await alert.present();
  }
}
