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
              private recorrido: RecorridoService,
            private loadingCtrl: LoadingController) {}


  async buttonClick(){
//quita espacios
this.direccion_salida = this.direccion_salida.trim();
this.direccion_llegada = this.direccion_llegada.trim();
//muestra aunucio de carga
    const loading = await this.loadingCtrl.create({
      message: 'Buscando recorridos..',
    });

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
      await loading.present();
     this.recorrido_final= await this.recorrido.getRecorridoCor(this.latitud_salida,this.longitud_salida, this.direccion_llegada);

    }
    else{
      //consulta con direcciones
      await loading.present();
   this.recorrido_final= await this.recorrido.getRecorridoDir(this.direccion_salida, this.direccion_llegada)

    }
  await  this.storage.set('recorrido_final', this.recorrido_final);
  if(this.recorrido_final.bus == 'cero'){
    //consulta con arreglo
    await loading.present();
    await loading.dismiss();
    this.router.navigate(['/page-recorrido-combinacion']);

  }
  else
  {
    await loading.present();
    await loading.dismiss();
    this.router.navigate(['/page-recorrido']);

  }

};
};

  ngOnInit() {
    //encontrar locacion del dispositivo
    this.geolocation.getCurrentPosition({timeout:7000}).then((position) => {
      this.latitud_salida =  position.coords.latitude;
    //  console.log(this.latitud_salida);
      this.longitud_salida = position.coords.longitude;
    //  console.log(this.longitud_salida);
  }).catch((error) => {
    console.log('Error encontrando la gps', error);
 });


  };
  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Buscando recorridos..',
      duration: 5000
    });
    await loading.present();
    return loading;
  }
}
//npm install @ionic/angular@4.0.0-beta.7
