import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasonaryComponent } from './masonary/masonary.component';

const routes: Routes = [
  { path: 'masonry', component: MasonaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
