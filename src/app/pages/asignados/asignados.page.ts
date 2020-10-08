import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NavController, MenuController } from '@ionic/angular';
import { CasosAsignados } from '../../interfaces/interfaces';

@Component({
  selector: 'app-asignados',
  templateUrl: './asignados.page.html',
  styleUrls: ['./asignados.page.scss'],
})
export class AsignadosPage implements OnInit {  
  casos: CasosAsignados[] = []
  casosX: CasosAsignados[] = []
  codambu: number;

  constructor(
    private dataService: DataService,
    public navCtrl: NavController,
    public menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(true, 'sismenu');
  }  
  ionViewWillEnter() {    
    this.casos = this.dataService.getCasosAsignados();              
  }
  ngOnInit() {
    if (this.dataService.userToken == '') {
      this.navCtrl.navigateRoot('login');
    }
  }
  getFechaOr(fecha:string){
    fecha = fecha.replace('T',' ')
    fecha = fecha.replace('-05:00','')
    return fecha
  }
  cargarCaso(cod_caso:string, cod_hospital:string, hospital:string){
    this.dataService.codCaso = cod_caso
    this.dataService.codHospital = cod_hospital    
    this.dataService.Hospital = hospital    
    this.navCtrl.navigateRoot('asignados/cargar');
  }
}
