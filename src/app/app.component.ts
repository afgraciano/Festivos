import { Component } from '@angular/core';
import { FestivoService } from './service/festivo.service';
import { Festivo } from './models/festivo';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
interface TableColumn {
  // Define las propiedades de tu tabla, por ejemplo:
  // name: string;
  // prop: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public fechaSeleccionada: any;
  public columnas = [
    { name: 'Festivo', prop: 'festivo' },
    { name: 'Fecha', prop: 'fecha' },
  ];
  public modoColumna: any;
  public tipoSeleccion: any;
  public ano: any;
  public fecha: string = '';
  public año: number = 0;
  public resultadoVerificacion: string = '';
  public festivos: Festivo[] = [];

  constructor(private festivoService: FestivoService) {
    //this.modoColumna = { force: true };
    this.tipoSeleccion = { single: false }
  }

  formatFecha(fecha: Date): string {
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const dia = fecha.getDate();
    return `${año}/${mes}/${dia}`;
  }



  /* public validarFecha() {
     let fecha = new Date(this.fechaSeleccionada);
     this.festivoService.verificarFestivo(fecha).subscribe(
       respuesta => {
        console.log(respuesta);
         //window.alert(respuesta);
       }
     );
   }
 */
   public validarFecha() {
    let fecha = new Date(this.fechaSeleccionada);
    this.festivoService.verificarFestivo(fecha).subscribe(
      (respuesta: any) => {
        console.log(respuesta);
        // Accede a la propiedad 'mensaje' dentro del objeto 'respuesta'
        window.alert(respuesta['mensaje']);
      },
      error => {
        console.error(error);
      }
    );
}



  public onActivate(event: any) {
    if (event.type == 'click') {
      this.tipoSeleccion = event.row;
    }
  }

  /*
    verificarFestivo() {
      // Convertir la cadena this.fecha a un objeto Date
      const fechaSeleccionada = new Date(this.fecha);
  
      // Verificar si la conversión fue exitosa
      if (isNaN(fechaSeleccionada.getTime())) {
        // La conversión falló, la fecha no es válida
        console.error('Fecha no válida');
        alert('Fecha no válida');
        return;
      }
  
      // Llamar al servicio con el objeto Date
      this.festivoService.verificarFestivo(fechaSeleccionada).subscribe(
        resultado => {
          if (typeof resultado === 'string') {
            this.resultadoVerificacion = resultado;
             // Mostrar mensaje de aviso
          alert(resultado);
          } else if (resultado && 'message' in resultado) {
            this.resultadoVerificacion = resultado['message'];
            // Mostrar mensaje de aviso
          alert(resultado['message']);
          } else {
            this.resultadoVerificacion = JSON.stringify(resultado);
            // Mostrar resultado como cadena
          alert(JSON.stringify(resultado));
          }
        },
        error => console.error(error)
      );
    }
    */


  obtenerFestivos() {
    this.festivoService.obtenerFestivos(this.ano).subscribe(
      festivos => this.festivos = festivos,
      error => console.error(error)
    );
  }

}

