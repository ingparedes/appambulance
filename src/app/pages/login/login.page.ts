import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NavController, MenuController, AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { DataService } from '../../services/data.service';
import { Ambulancia, Usuario } from '../../interfaces/interfaces';
import { IonicSelectableComponent } from 'ionic-selectable';
import { LocaldataService } from '../../services/localdata.service';
import * as BCrypt from 'bcryptjs'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnDestroy, OnInit {
  @ViewChild('selectDiag') selectComponent: IonicSelectableComponent
  ambul: any
  currentScreenOrientation: string

  Usuario: string;
  Password: string;
  Ambulancias: Ambulancia[] = []
  usuarios: Usuario[] = []

  constructor(
    public localService: LocaldataService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public dataService: DataService,
    public alertController: AlertController,
    private geo: Geolocation,
    private screenOrientation: ScreenOrientation) { }
  ionViewWillEnter() {
    this.setLandscape()
    this.Ambulancias = this.dataService.getAmbulancias()
    this.usuarios = this.dataService.getUsuarios()    
    this.menuCtrl.enable(false, 'sismenu');
    if (this.Ambulancias.length == 0) {
      this.dataService.conxion = 'false'
    } else {

    }
  }
  setAmbu() {
    this.dataService.codAmbu = this.ambul.cod_ambulancias
    this.dataService.icodAmbu = this.ambul.id_ambulancias
    this.dataService.userToken = this.Usuario
    this.login()
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.menuCtrl.enable(true, 'sismenu');
  }
  setLandscape() {
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }
  //BUSCADOR SELECCIONABLE
  diagCancel() {
    this.selectComponent.clear();
    this.selectComponent.close();
  }
  diagClear() {
    this.selectComponent.clear();
    this.selectComponent.close();
  }
  diagConf() {
    this.selectComponent.confirm();
    this.selectComponent.close();
  }
  searchDiag(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    let text = event.text.trim().toLowerCase();
    event.component.startSearch();

    if (!text) {
      event.component.items = [];
      event.component.endSearch();
      return;
    }

    event.component.items = this.filterPorts(this.Ambulancias, text);
    event.component.endSearch();
  };
  filterPorts(diagnosticos: Ambulancia[], text: string) {
    return diagnosticos.filter(diagnostico => {
      return diagnostico.cod_ambulancias.toLowerCase().indexOf(text) !== -1
    });
  }
  login() {
    this.verifyUser(this.Usuario, this.Password)
  }
  buscarUsuario(usuarios: Usuario[], text: string) {
    return usuarios.filter(usuario => {
      return usuario.login.toLowerCase().indexOf(text) !== -1
    });
  }
  verifyUser(user: string, pass: string) {
    let veruser = this.buscarUsuario(this.usuarios, user)
    if (user == '' || user == undefined) {
      this.presentAlertConfirm('Ingresa un usuario valido')
    } else {
      if (veruser.length == 0) {
        this.presentAlertConfirm('El usuario que ingresaste no existe')
      } else {
        if (pass == '' || pass == undefined) {
          this.presentAlertConfirm('Debes escribir una contraseña')
        } else {
          let hash = veruser[0].pw
          if (BCrypt.compareSync(pass, hash)) {
            if (this.ambul == '' || this.ambul == undefined) {
              this.presentAlertConfirm('Debes elegir una ambulancia para continuar')
            } else {
              this.navCtrl.navigateRoot('inicio');
            }
          } else {
            this.presentAlertConfirm('La Contraseña ingresada no es correcta')
          }
        }
      }
    }

  }
  async presentAlertConfirm(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }
}
