import { Component } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent {
appareilName="Machine à laver";
appareilStatus ="eteint";
constructor(){
  
}
ngOnItnit(){

}
getStatus(){
  return this.appareilStatus;
}

}
