import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Insumo, Medicamento } from '../../../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-complementos',
  templateUrl: './complementos.page.html',
  styleUrls: ['./complementos.page.scss'],
})
export class ComplementosPage implements OnInit {

  constructor(private dataService: DataService, public alertController: AlertController) { }

  medicamentos: Medicamento[] = []
  insumos: Insumo[] = []

  selectmedicamentos: any[] = []
  selectinsumos: any[] = []
  
  async addInsumo(id:string,insumo:string) {
    const alert = await this.alertController.create({
      cssClass: 'modalAdd',
      header: 'Añadir Insumos: '+insumo,      
      inputs: [
        {
          name: 'CantidadInsumos',                    
          type: 'number',
          placeholder: 'Cantidad',
          value: '1'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => {            
          }
        }, {
          text: 'Añadir',
          handler: (res) => {
            let ins = {
              idins: id,
              ins: insumo,
              cant: res.CantidadInsumos
            }
            this.selectinsumos.push(ins)
            this.dataService.setInsumos(ins.idins,ins.cant)            
          }
        }
      ]
    });
    await alert.present();
  }
  async addMedicamento(id:string,medicamento:string) {
    const alert = await this.alertController.create({
      cssClass: 'modalAdd',
      header: 'Añadir Medicamentos: '+medicamento,      
      inputs: [
        {
          name: 'CantidadMedicamentos',                       
          type: 'number',
          placeholder: 'Cantidad',
          value: '1'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (res) => {            
          }
        }, {
          text: 'Añadir',
          handler: (res) => {                        
            let med = {
              idmed: id,
              med: medicamento,
              cant: res.CantidadMedicamentos
            }
            this.selectmedicamentos.push(med)
            this.dataService.setMedicamento(med.idmed,med.cant)            
          }
        }
      ]
    });
    await alert.present();
  }
  ngOnInit() {
    this.insumos = this.dataService.getInsumos();
    this.medicamentos = this.dataService.getMedicamentos();    
  }
}