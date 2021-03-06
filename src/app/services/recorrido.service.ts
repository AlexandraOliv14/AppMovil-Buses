import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Recorrido} from './../interfaces/recorrido'

@Injectable({
  providedIn: 'root'
})
export class RecorridoService {
private api = 'http://53932208.ngrok.io'
  constructor( private http: HttpClient) { }

  getRecorridoDir(salida:string,llegada:string){
    const  path = `${this.api}/dir/${salida}/${llegada}`;
    return this.http.get<Recorrido>(path).toPromise();
  }
  getRecorridoCor(salida_lat:number,salida_long:number, llegada:string){
    const path = `${this.api}/coor/${salida_lat},${salida_long}/${llegada}`;
    return this.http.get<Recorrido>(path).toPromise();
  }
  getArregloRecorridoDir(salida:string,llegada:string){
    const  path = `${this.api}/dir/${salida}/${llegada}`;
    return this.http.get<Recorrido>(path).toPromise();
  }
  getArregloRecorridoCor(salida_lat:number,salida_long:number, llegada:string){
    const path = `${this.api}/coor/${salida_lat},${salida_long}/${llegada}`;
    return this.http.get<Recorrido>(path).toPromise();
  }
}
