import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranquiasComponent } from './franquias.component';

const routes: Routes = [{ path: '', component: FranquiasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FranquiasRoutingModule {}
