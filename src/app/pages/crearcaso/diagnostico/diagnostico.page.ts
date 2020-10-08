import { Component, OnInit, ViewChild } from '@angular/core';
import { Triage, Diagnostico } from '../../../interfaces/interfaces';
import { DataService } from '../../../services/data.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.page.html',
  styleUrls: ['./diagnostico.page.scss'],
})
export class DiagnosticoPage implements OnInit {
  @ViewChild('selectDiag') selectComponent: IonicSelectableComponent
  diagnosticos: Diagnostico[] = []
  triages: Triage[] = []
  diags: Diagnostico[] = []
  horadiag: String = "";
  triage: String = "";
  sv_tx: String = "";
  sv_fc: String = "";
  sv_fr: String = "";
  sv_temp: String = "";
  sv_satO2: String = "";
  sv_gl: String = "";
  cod_diag_cie: String = "";
  ap_diabetes: String = "";
  ap_cardiop: String = "";
  ap_convul: String = "";
  ap_asma: String = "";
  ap_acv: String = "";
  ap_has: String = "";
  ap_alergia: String = "";
  ap_med_paciente: String = "";
  ap_otros: String = "";

  constructor(private dataService: DataService, public alertController: AlertController) { }

  ngOnInit() {
    this.triages = this.dataService.getTriage()
    this.diagnosticos = this.dataService.getDiagnosticos()
    this.horadiag = this.dataService.dateLocale(new Date())    
  }
  ionViewWillLeave() {
    this.diags.forEach(element => {
      if (this.cod_diag_cie == '' || this.cod_diag_cie == undefined) {
        this.cod_diag_cie = element.id
      }else{
        this.cod_diag_cie = this.cod_diag_cie + ', ' + element.id
      }
    });    
    this.dataService.setDiagnostico(this.horadiag,this.triage,this.sv_tx,this.sv_fc,this.sv_fr,this.sv_temp,this.sv_satO2,this.sv_gl,this.cod_diag_cie,this.ap_diabetes,this.ap_cardiop,this.ap_convul,this.ap_asma,this.ap_acv,this.ap_has,this.ap_alergia,this.ap_med_paciente,this.ap_otros)    
  }

  SetCheck(event) {
    let checked: boolean = event.detail.checked
    let check: string = event.detail.value    
    switch (check) {
      case "1":        
        if (checked == true) {          
          this.ap_diabetes = "1";
        } else {
          this.ap_diabetes = null;
        }
        break;
      case "2":
        if (checked == true) {
          this.ap_cardiop = "1";
        } else {
          this.ap_cardiop = null;
        }
        break;
      case "3":
        if (checked == true) {
          this.ap_convul = "1";
        } else {
          this.ap_convul = null;
        }
        break;
      case "4":
        if (checked == true) {
          this.ap_asma = "1";
        } else {
          this.ap_asma = null;
        }
        break;
      case "5":
        if (checked == true) {
          this.ap_acv = "1";
        } else {
          this.ap_acv = null;
        }
        break;
      case "6":
        if (checked == true) {
          this.ap_has = "1";
        } else {
          this.ap_has = null;
        }
        break;
      case "7":
        if (checked == true) {
          this.ap_alergia = "1";
        } else {
          this.ap_alergia = null;
        }
        break;
      default:
        break;
    }

  }
  //BUSCADOR SELECCIONABLE
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Diagnosticos',
      message: 'Debes elegir Máximo 3 Diagnosticos, vuelve a empezar.',
      buttons: [
        {
          text: 'Entendido',
        }
      ]
    });

    await alert.present();
  }
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
    if (this.diags.length >= 4) {
      this.selectComponent.clear();
      this.diags = []
      this.presentAlertConfirm()
    } else {
      this.selectComponent.close();
    }
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

    event.component.items = this.filterPorts(this.diagnosticos, text);
    event.component.endSearch();
  };
  filterPorts(diagnosticos: Diagnostico[], text: string) {
    return diagnosticos.filter(diagnostico => {
      return diagnostico.nombre.toLowerCase().indexOf(text) !== -1
    });
  }
}
