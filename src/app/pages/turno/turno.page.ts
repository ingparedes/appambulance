import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.page.html',
  styleUrls: ['./turno.page.scss'],
})
export class TurnoPage implements OnInit {

  codAmbu: any
  km_actual: String;
  combustible_actual: String;
  cantidadtiket: String;
  observacion: String;

  constructor(public alertController: AlertController, public menuCtrl: MenuController, private navCtrl: NavController, private dataService: DataService) { }

  ngOnInit() {
    if (this.dataService.userToken == '') {
      this.navCtrl.navigateRoot('login');
      this.menuCtrl.enable(false, 'sismenu');
    }else{
      this.codAmbu = this.dataService.codAmbu
    }
  }

  saveTurno() {
    this.presentAlertConfirm()
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Abrir Turno',
      message: '¿Quieres abrir el turno?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Si',
          handler: () => {            
            this.dataService.setTurno(this.km_actual,this.combustible_actual,this.cantidadtiket,this.observacion)
            this.navCtrl.navigateRoot('inicio');
          }
        }
      ]
    });

    await alert.present();
  }
}
