import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../../services/data.service';
@Component({
  selector: 'app-loadobstetrico',
  templateUrl: './loadobstetrico.page.html',
  styleUrls: ['./loadobstetrico.page.scss'],
})
export class LoadobstetricoPage implements OnInit {
  trab:String="";
  sang:String="";
  g:String="";
  p:String="";
  a:String="";
  n:String="";
  c:String="";
  fuente:String="";
  tgest:String="";
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
  ionViewWillLeave() {
    this.dataService.setObstetrico(this.trab,this.sang,this.g,this.p,this.a,this.n,this.c,this.fuente,this.tgest)
  }
  setTrab(event){
    let anything
    if (event.detail.checked) {
      this.trab = "1"
    }else{
      this.trab = "0"      
    } 
  }
  setSang(event){
    let anything
    if (event.detail.checked) {
      this.sang = "1"
    }else{
      this.sang = "0"      
    } 
  }
  setFuente(event){
    let anything
    if (event.detail.checked) {
      this.fuente = "1"
    }else{
      this.fuente = "0"      
    } 
  }
}
