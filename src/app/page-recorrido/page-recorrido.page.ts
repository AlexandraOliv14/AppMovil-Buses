import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import {Recorrido} from 'src/app/interfaces/recorrido'

@Component({
  selector: 'app-page-recorrido',
  templateUrl: './page-recorrido.page.html',
  styleUrls: ['./page-recorrido.page.scss'],
})
export class PageRecorridoPage implements OnInit {

//  public direccion_salida: string;
//  public direccion_llegada: string;
//  public latitud_llegada: any;
//  public longitud_llegada: any;
//  public data: string[];
//  public dato: string;

  public recorrido_final: Recorrido;
  public bus:string;

  constructor(
              private geolocation: Geolocation,
              private router: Router,
              private storage: Storage) {}



  ngOnInit() {
  //  this.dato = this.storage.get('dato');
  //  this.datanormal = this.storage.get('datanormal')
  this.recorrido_final = this.storage.get('recorrido_final');
  console.log(this.recorrido_final);
  this.bus = this.recorrido_final.bus;
  console.log(this.bus)

  }

}
