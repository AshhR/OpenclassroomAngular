import { Component,OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';
//import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
    name:string ='Appareils';
    status:string ='Statut' ;
   // authCheck :boolean=false;
  
  /*checkSign(){
    if (this.authCheck=this.authService.isAuth){
      return this.SingleAppareilComponent.checkSign():true ;
    }
  }*/

  constructor (private appareilService: AppareilService,
                      private route: ActivatedRoute){
    
  }

ngOnInit(): void {
  const id=this.route.snapshot.params['id'];
  this.name =this.appareilService.getAppareilById(+id)?.name as string;
  this.status =this.appareilService.getAppareilById(+id)?.status as string;
 

    //Le formalisme ? nom de variable type de varibale 
    //permet d'accéder à la valeur récupérée précisement suivant sa définintion
    //this.name = this.route.snapshot.params['id'];
  }
  
  }
 
