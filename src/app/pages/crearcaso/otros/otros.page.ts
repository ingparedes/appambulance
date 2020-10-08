import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService } from '../../../services/data.service';
import { CierreCaso, Hospital } from '../../../interfaces/interfaces';
import { IonicSelectableComponent } from 'ionic-selectable';
@Component({
  selector: 'app-otros',
  templateUrl: './otros.page.html',
  styleUrls: ['./otros.page.scss'],
})
export class OtrosPage implements OnInit, AfterViewInit {
  @ViewChild('imageCanvas', { static: false }) canvas: any;
  @ViewChild('selectHops') selectComponent: IonicSelectableComponent
  desc: String = '';
  nombre_confirma: String = '';
  telefono_confirma: String = '';
  kfinal: String = '';
  hospistal: String = '';
  med: String = '';
  obscaso: String = '';
  firma: any;
  cierre: String = '';
  CierreCasos: CierreCaso[] = []
  hospitales: Hospital[] = [];
  hos: any;
  canvasElement: any;
  saveX: number;
  saveY: number;

  selectedColor = '#000000';

  drawing = false;
  lineWidth = 5;

  constructor(private plt: Platform, private dataService: DataService) { }

  ngOnInit() {
    this.CierreCasos = this.dataService.getCierreCaso();
    this.hospitales = this.dataService.getHospitales();
  }
  ngAfterViewInit() {
    // Set the Canvas Element and its size
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = 200;
  }

  startDrawing(ev) {
    this.drawing = true;
    var canvasPosition = this.canvasElement.getBoundingClientRect();

    this.saveX = ev.pageX - canvasPosition.x;
    this.saveY = ev.pageY - canvasPosition.y;
  }
  moved(ev) {
    if (!this.drawing) return;    
    const canvasPosition = this.canvasElement.getBoundingClientRect();
    let ctx = this.canvasElement.getContext('2d');

    let curretX = ev.pageX - canvasPosition.x
    let curretY = ev.pageY - canvasPosition.y

    ctx.lineJoin = 'round'
    ctx.strokeStyle = this.selectedColor
    ctx.lineWidth = this.lineWidth

    ctx.beginPath();
    ctx.moveTo(this.saveX, this.saveY);
    ctx.lineTo(curretX, curretY)
    ctx.closePath();

    ctx.stroke();

    this.saveX = curretX
    this.saveY = curretY
  }
  endDrawing() {
    this.drawing = false;
  }

  //BUSCAR ASEGURADORA
  hospCancel() {
    this.selectComponent.clear();
    this.selectComponent.close();
  }
  hospClear() {
    this.selectComponent.clear();
    this.selectComponent.close();
  }
  hospConf() {
    this.selectComponent.confirm();
    this.selectComponent.close();
    this.hospistal = this.hos.id
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

    event.component.items = this.filterPorts(this.hospitales, text);
    event.component.endSearch();
  };
  filterPorts(hospitales: Hospital[], text: string) {
    return hospitales.filter(hospital => {
      return hospital.nombre.toLowerCase().indexOf(text) !== -1
    });
  }
  cerrarCaso() {
    this.firma = this.canvasElement.toDataURL()
    this.dataService.setImagen("1", this.firma)
    this.dataService.setOthers(this.desc, this.nombre_confirma, this.telefono_confirma, this.kfinal, this.hospistal, this.med, this.obscaso, this.cierre)
    this.dataService.saveCase()
  }
}
