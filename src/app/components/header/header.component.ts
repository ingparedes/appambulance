import { Component, Input, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showH: boolean = false

  constructor(private geo: Geolocation, private data: DataService) { }

  ghBase() {
    this.data.fhora = this.data.dateLocale(new Date())
    this.data.setHoraB()
  }

  ghStart() {
    this.data.fhora = this.data.dateLocale(new Date())
    this.geo.getCurrentPosition().then((resp) => {      
      this.data.setHoraI(resp.coords.longitude.toString(),resp.coords.latitude.toString())      
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ghEvent() {
    this.data.fhora = this.data.dateLocale(new Date())
    this.data.setHoraE()
  }

  ghHosp() {
    this.data.fhora = this.data.dateLocale(new Date())
    this.data.setHoraH()
  }

  ngOnInit() {

  }
}
