import { TitulosMenusModule } from './../components/titulos-menus/titulos-menus.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FranquiasRoutingModule } from './franquias-routing.module';
import { FranquiasComponent } from './franquias.component';
import { ImagemFranquiasComponent } from './imagem-franquias/imagem-franquias.component';
import { FormFranquiasComponent } from './form-franquias/form-franquias.component';

@NgModule({
  declarations: [
    FranquiasComponent,
    ImagemFranquiasComponent,
    FormFranquiasComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FranquiasRoutingModule,
    TitulosMenusModule,
  ],
  exports: [FranquiasComponent],
})
export class FranquiasModule {}
