import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes! : number;
  counterSubscription! : Subscription;
  constructor(){

  }
  ngOnInit(): void {
    const counter = interval(1000);
    this.counterSubscription=counter.subscribe(
            (value:number)=> {
          this.secondes = value;        
        }
        
        /*,
            (error:any) => {
              console.log('Une erreur a été détectée');
        },
            () =>{
          console.log('finis!');
        }*/

      );

    }
    ngOnDestroy(): void {
      this.counterSubscription.unsubscribe();
    }
  }
