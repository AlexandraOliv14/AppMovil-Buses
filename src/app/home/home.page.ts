import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public direccion_salida: string;
  public direccion_llegada: string;

  constructor(private alertController: AlertController,
              private router: Router,) {}

  buttonClick(){
  //alert(this.direccion_salida)
  this.router.navigate(['/list']);
  }
}
