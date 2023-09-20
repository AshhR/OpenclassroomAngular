import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuth =false;
  //<Date> est mis pour pour que le promise de l'async 
  //prenne en charge automatiquement le type date
  lastDate = new Promise<Date>((resolve , reject)=>{
    const date = new Date();
    setTimeout(() => {
      resolve(date)
    }, 2000);
  });
  
  

  appareils!: any[];
  //Le Vartiable! permet de déclarer en désactivant la vérification de la propriété

  constructor(private appareilService: AppareilService){
    setTimeout(
      () => {
        this.isAuth = true;
      
    },  4000);
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
  onAllumer(){
    this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOfAll();
  }
}
