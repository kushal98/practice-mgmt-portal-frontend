import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartingComponent } from './charting/charting.component';

const routes: Routes = [
  { path: '', component: ChartingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
