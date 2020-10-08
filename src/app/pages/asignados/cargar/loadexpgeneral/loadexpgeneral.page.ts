import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Expg } from '../../../../interfaces/interfaces';
@Component({
  selector: 'app-loadexpgeneral',
  templateUrl: './loadexpgeneral.page.html',
  styleUrls: ['./loadexpgeneral.page.scss'],
})
export class LoadexpgeneralPage implements OnInit {
  checkboxabd: Expg[] = []
  checkboxback: Expg[] = []
  checkboxchest: Expg[] = []
  checkboxface: Expg[] = []
  checkboxhead: Expg[] = []
  checkboxmember: Expg[] = []
  checkboxneck: Expg[] = []
  checkboxpelv: Expg[] = []
  checkboxskin: Expg[] = []

  constructor(private dataService: DataService ) {}

  ngOnInit() {
    this.checkboxskin = this.dataService.getExploGen('1')
    this.checkboxhead = this.dataService.getExploGen('2')
    this.checkboxback = this.dataService.getExploGen('3')
    this.checkboxpelv = this.dataService.getExploGen('4')
    this.checkboxchest = this.dataService.getExploGen('5')
    this.checkboxface = this.dataService.getExploGen('6')
    this.checkboxabd = this.dataService.getExploGen('7')
    this.checkboxneck = this.dataService.getExploGen('8')
    this.checkboxmember = this.dataService.getExploGen('9')
  }

  SetExpG(event){
    let anything
    if (event.detail.checked) {
      anything = this.dataService.setExpGeneral(event.detail.value)
    }else{
      anything = this.dataService.delExpGeneral(event.detail.value)
    } 
  }
}
