import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { TitulosMenusModule } from './../components/titulos-menus/titulos-menus.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacotesRoutingModule } from './pacotes-routing.module';
import { PacotesComponent } from './pacotes.component';
import { ImagemFreeBeerComponent } from './imagem-free-beer/imagem-free-beer.component';

@NgModule({
  declarations: [PacotesComponent, ImagemFreeBeerComponent],
  imports: [
    CommonModule,
    PacotesRoutingModule,
    TitulosMenusModule,
    MatGridListModule,
    MatCardModule,
  ],
  exports: [PacotesComponent],
})
export class PacotesModule {}
