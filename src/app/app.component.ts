import { Component,OnInit } from '@angular/core';
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
  
  
//   appareils = [
//     {
//       name: 'Machine à laver',
//       status: 'allumé'
//     },
//     {
//       name: 'Télévision',
//       status: 'allumé'
//     },    
//     {
//       name: 'Ordinateur',
//       status: 'éteint'
//     }
// ];

  appareils: any[];

  constructor(privateService: AppareilService){
    setTimeout(
      () => {
        this.isAuth = true;
      
    },  4000);
  }
  onAllumer(){
    console.log("on allume tout")
  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
}
