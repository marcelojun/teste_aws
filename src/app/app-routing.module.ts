import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contato' },
  {
    path: 'contato',
    loadChildren: () =>
      import('./contato/contato.module').then((m) => m.ContatoModule),
  },
  {
    path: 'franquias',
    loadChildren: () =>
      import('./franquias/franquias.module').then((m) => m.FranquiasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
