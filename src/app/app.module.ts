import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { HostComponent } from './host/host.component';
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    HostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppareilService
],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
