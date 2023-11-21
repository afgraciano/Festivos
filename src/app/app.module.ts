import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReferenciasMaterialModule } from './referencias-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FestivoService } from './service/festivo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReferenciasMaterialModule,
    NgxDatatableModule
  ],
  providers: [FestivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
