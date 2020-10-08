import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Trauma } from '../../../../interfaces/interfaces';
@Component({
  selector: 'app-trauma',
  templateUrl: './trauma.page.html',
  styleUrls: ['./trauma.page.scss'],
})
export class TraumaPage implements OnInit {

  checkboxesf: Trauma[] = []
  checkboxesq: Trauma[] = []
  checkboxesc: Trauma[] = []
  checkboxeso: Trauma[] = []
  checkboxesa: Trauma[] = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.checkboxesf = this.dataService.getTrauma("1");
    this.checkboxesc = this.dataService.getTrauma("2");
    this.checkboxesq = this.dataService.getTrauma("3");
    this.checkboxeso = this.dataService.getTrauma("4");
    this.checkboxesa = this.dataService.getTrauma("5");  
  }

  SetTrauma(event) {
    let anything
    if (event.detail.checked) {
      anything = this.dataService.setTrauma(event.detail.value)
    }else{
      anything = this.dataService.delTrauma(event.detail.value)
    }        
  }
}
