import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Expf, TraumasF } from '../../../../interfaces/interfaces';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-loadexpfisica',
  templateUrl: './loadexpfisica.page.html',
  styleUrls: ['./loadexpfisica.page.scss'],
})
export class LoadexpfisicaPage implements OnInit, AfterViewInit {
  traumalist: TraumasF[] = []
  checkboxtrauma: Expf[] = []
  @ViewChild('imageCanvas', { static: false }) canvas: any;

  saveX: number;
  saveY: number;
  trauma: number = 0;
  idtrauma: number = 0;
  traumatext: string = '';

  canvasElement: any;
  dataUrl: any;

  constructor(private dataService: DataService, public alertController: AlertController) { }

  startDrawing(ev) {
    const canvasPos = this.canvasElement.getBoundingClientRect();
    this.saveX = ev.pageX - canvasPos.x
    this.saveY = ev.pageY - canvasPos.y
    this.drawTrauma()
  }
  clear() {
    var ctx = this.canvasElement.getContext('2d')
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)
    this.setBackground()
    this.trauma = 0
    this.traumatext = ''
    this.traumalist = []
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Debes elegir un Trauma antes de dibujar!',
      buttons: [
        {
          text: 'Listo',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }
  addTrauma(name, id) {
    this.traumatext = name
    this.idtrauma = id
  }
  drawTrauma() {
    if (this.traumatext === '') {
      this.presentAlertConfirm()
    } else {
      if (this.trauma == 0) {
        this.trauma = 1
      } else {
        this.trauma = this.trauma + 1
      }

      let circulo = this.canvasElement.getContext('2d')

      circulo.fillStyle = '#FF0000';
      circulo.beginPath();
      circulo.arc(this.saveX, this.saveY, 25, 0, 2 * Math.PI);
      circulo.fill();
      circulo.closePath();
      circulo.fillStyle = '#000000';
      circulo.beginPath();
      circulo.font = "15px Verdana";
      circulo.fillText(this.trauma, this.saveX - 4, this.saveY + 4);
      circulo.stroke();
      circulo.closePath();

      let arrayText = {
        id: this.idtrauma,
        name: this.traumatext,
        pos: this.trauma,
        posx: this.saveX,
        posy: this.saveY
      }

      this.traumalist.push(arrayText)
      this.traumatext = ''
      this.idtrauma = 0
    }
  }

  setBackground() {
    let body = new Image();
    body.src = './assets/img/body.png';
    let ctx = this.canvasElement.getContext('2d')

    body.onload = () => {
      ctx.drawImage(body, 0, 0, this.canvasElement.width, 448);
    }
  }
  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.height = 448;
    this.setBackground()
  }
  ngOnInit() {
    this.checkboxtrauma = this.dataService.getExploFisica();
  }
  ionViewWillLeave() {            
    this.dataService.setImagen("2", this.canvasElement.toDataURL())
    this.dataService.setDelTraumaFisico()
    setTimeout(() => {
      this.traumalist.forEach(element => {
        this.dataService.setTraumaFisico(element.id, element.posx, element.posy, element.pos)
      });
    }, 3000);
  }
}
