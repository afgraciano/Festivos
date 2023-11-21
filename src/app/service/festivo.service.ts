import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festivo } from '../models';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {
  /*private apiUrl = 'http://localhost:8081/festivos';

  constructor(private http: HttpClient) { }*/

  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.urlAPI}festivos`;
  }

 /* verificarFestivo(fecha: string): Observable<string> {
    return this.http.get<string>(`${this.url}/verificar/${fecha}`);
  }*/

  verificarFestivo(fecha: Date): Observable<string> {
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
    let formattedFecha = `${año}/${mes}/${dia}`;
    return this.http.get<string>(`${this.url}/verificar/${formattedFecha}`);
  }



  obtenerFestivos(año: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}/obtener/${año}`);
}

}
