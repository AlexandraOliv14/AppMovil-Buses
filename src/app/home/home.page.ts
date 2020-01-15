import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


import { AlertController,ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

import { from } from 'rxjs';
import {RecorridoService} from 'src/app/services/recorrido.service';
import { map } from 'rxjs/operators'
import {Recorrido} from 'src/app/interfaces/recorrido'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public direccion_salida: string = '';
  public direccion_llegada: string = '';
  public latitud_salida: any;
  public longitud_salida: any;
  public recorrido_final: Recorrido;
//  public data: any[];
  //public dato: any;
//  type: SearchType = SearchType.all;


  constructor(
              private geolocation: Geolocation,
              private router: Router,
              private storage: Storage,
              public http: HttpClient,
              private recorrido: RecorridoService) {}


  async buttonClick(){

  this.storage.set('direccion_salida', this.direccion_salida);
  if (this.direccion_llegada.length == 0)
  {
    alert('campo de direccion de llegada vacio')
  }
  else{
    if (this.direccion_salida.length == 0)
    {
      alert('Se ocupara la direccion del gps')
      //consulta con cordenadas
    await  this.recorrido.getRecorridoCor(this.latitud_salida,this.longitud_salida, this.direccion_llegada)
      .subscribe(recorrido => {
        this.recorrido_final = recorrido;
      //  console.log(this.recorrido_final);
        //console.log('hola');
      });
      //console.log(this.recorrido_final);
      console.log('bhsfbdhjf');
    }
    else{
      //consulta con direcciones
    this.recorrido.getRecorridoDir(this.direccion_salida, this.direccion_llegada)
    .subscribe(recorrido => {
      this.recorrido_final = recorrido;
      console.log(recorrido);
    });
    }
    this.storage.set('recorrido_final', this.recorrido_final);
    this.storage.set('direccion_llegada', this.direccion_llegada);
    this.storage.set('direccion_salida', this.direccion_salida);

    this.router.navigate(['/page-recorrido']);
  }

};


  ngOnInit() {
    //encontrar locacion del dispositivo
    this.geolocation.getCurrentPosition({timeout:30000}).then((position) => {
      this.latitud_salida =  position.coords.latitude;
      console.log(this.latitud_salida);

      this.longitud_salida = position.coords.longitude;
      console.log(this.longitud_salida);
  }).catch((error) => {
    console.log('Error encontrando la gps', error);
 });


  };
}
//npm install @ionic/angular@4.0.0-beta.7
