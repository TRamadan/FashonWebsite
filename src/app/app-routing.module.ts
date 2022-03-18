import { NgModule } from '@angular/core';
import { ControlComponent } from './control/control.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    component: ControlComponent,
    loadChildren: () =>
      import('./control/control.module').then((m) => m.ControlModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
