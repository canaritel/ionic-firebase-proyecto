import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TareaPageRoutingModule } from './tarea-routing.module';

import { TareaPage } from './tarea.page';

@NgModule({
  imports: [
    CommonModule, //directivas y componentes básicos de angular
    FormsModule, //Formularios
    IonicModule, // para usar los componentes de ionic
    ReactiveFormsModule, // formularios
    TareaPageRoutingModule, //nuestra ruta del módulo Tarea
  ],
  declarations: [TareaPage],
})
export class TareaPageModule {}
