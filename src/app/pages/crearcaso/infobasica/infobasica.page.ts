import { Component, OnInit, ViewChild } from '@angular/core';
import { Departamento, Provincia, Distrito, DNI, Genero, Asegurador } from '../../../interfaces/interfaces';
import { DataService } from '../../../services/data.service';
import { IonicSelectableComponent } from 'ionic-selectable';
@Component({
  selector: 'app-infobasica',
  templateUrl: './infobasica.page.html',
  styleUrls: ['./infobasica.page.scss'],
})
export class InfobasicaPage implements OnInit {
  @ViewChild('selectAseg') selectComponent: IonicSelectableComponent
  //VARIABLES 
  asegs: Asegurador[] = []
  gen: Genero[] = []
  dptos: Departamento[] = []
  provs: Provincia[] = []
  dists: Distrito[] = []
  tipoDNI: DNI[] = []
  tipoEdad: string;
  aseg: any;
  today: Date = new Date
  idcaso: string = "";
  dni: string = "";
  tdni: string = "";
  nombre1: string = "";
  nombre2: string = "";
  apellido1: string = "";
  apellido2: string = "";
  genero: string = "";
  edad: Number = 0;
  fechanacimiento: string = "";
  tedad: string = "";
  telefono: string = "";
  celular: string = "";
  direc: string = "";
  aseguradora: string = "";
  dpto: string = "";
  prov: string = "";
  dist: string = "";
  kinicial: string = "";

  //FORMATEAR FECHAS PARA LA DB
  dateLocale(date): string {
    return date.getFullYear()
      + '/' + this.leftpad(date.getMonth() + 1, 2)
      + '/' + this.leftpad(date.getDate(), 2)
  }
  //FORMATEAR FECHAS PARA LA DB
  leftpad(val, resultLength = 2, leftpadChar = '0'): String {
    return (String(leftpadChar).repeat(resultLength)
      + String(val)).slice(String(val).length);
  }
  //CALCULADORA DE EDAD
  calculaEdad(event) {
    let nac = new Date(event.detail.value)
    let today = new Date
    this.fechanacimiento = this.dateLocale(nac)
    let anios = Number(today.getFullYear().toString()) - Number(nac.getFullYear().toString()) - 1
    let meses = Number(nac.getMonth().toString()) - Number(today.getMonth().toString())
    let dias = Number(today.getDate().toString()) - Number(nac.getDate().toString())
    if (meses < 0) {
      anios = anios + 1
    } else if (meses == 0) {
      if (dias > 0) {
        anios = anios + 1
      } else if (dias == 0) {
        anios = anios + 1
      }
    }
    this.edad = anios
    if (anios === 0) {
      if (meses < 0) {
        if (meses === -1) {
          this.tipoEdad = "Mes"
          this.edad = meses * -1
          this.tedad = "2"
        } else {
          this.tipoEdad = "Meses"
          this.edad = meses * -1
          this.tedad = "2"
        }
      } else {
        if (dias > 1) {
          this.tipoEdad = "Dias"
          this.edad = dias
          this.tedad = "3"
        } else if (dias == 1) {
          this.tipoEdad = "Dia"
          this.edad = dias
          this.tedad = "3"
        } else {
          this.tipoEdad = ""
          this.edad = dias
          this.tedad = "3"
        }
      }
    } else {
      if (anios > 1) {
        this.tipoEdad = "Años"
        this.tedad = "1"
      } else if (anios === 1) {
        this.tipoEdad = "Año"
        this.tedad = "1"
      } else {
        this.tipoEdad = "Error"
        this.edad = null
      }
    }
  }
  constructor(private dataService: DataService) { }
  //INICIO DE LA PANTALLA ACTUAL
  ngOnInit() {
    this.gen = this.dataService.getGen()
    this.tipoDNI = this.dataService.getDNI()
    this.asegs = this.dataService.getAseg()
    this.dptos = this.dataService.getDpto()
    this.idcaso = this.dataService.codCaso
  }
  //SALE DE LA PANTALLA ACTUAL
  ionViewWillLeave() {
    let anyarray = this.dataService.setPaciente(this.dni, this.tdni, this.nombre1, this.nombre2, this.apellido1, this.apellido2, this.genero, this.edad, this.fechanacimiento, this.tedad, this.telefono, this.celular, this.direc, this.aseguradora, this.dpto, this.prov, this.dist,this.kinicial)
    this.dataService.kinicial = 
    this.dataService.gp = this.genero    
  }
  //METODOS VARIOS
  setNom(event) {
    let String: string = event.detail.value
    let splited = String.split(" ", 2)
    this.nombre1 = splited[0]
    if (splited[1]) {
      this.nombre2 = splited[1]
    } else {
      this.nombre2 = ""
    }
  }
  setApe(event) {
    let String: string = event.detail.value
    let splited = String.split(" ", 2)
    this.apellido1 = splited[0]
    if (splited[1]) {
      this.apellido2 = splited[1]
    } else {
      this.apellido2 = ""
    }
  }
  setDpto(event) {
    this.dpto = event.detail.value
    this.provs = this.dataService.getProv(this.dpto)
  }
  setProv(event) {
    this.prov = event.detail.value
    this.dists = this.dataService.getDist(this.dpto, this.prov)
  }
  setDist(event) {
    this.dist = event.detail.value
  }
  //BUSCAR ASEGURADORA
  asegCancel() {
    this.selectComponent.clear();
    this.selectComponent.close();
  }
  asegClear() {
    this.selectComponent.clear();
    this.selectComponent.close();
  }
  asegConf() {
    this.selectComponent.confirm();
    this.selectComponent.close();
    this.aseguradora = this.aseg.id_asegurador
  }
  searchAseg(event: {
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

    event.component.items = this.filterPorts(this.asegs, text);
    event.component.endSearch();
  };
  filterPorts(asegs: Asegurador[], text: string) {
    return asegs.filter(aseg => {
      return aseg.nombre_asegurador.toLowerCase().indexOf(text) !== -1
    });
  }
}
