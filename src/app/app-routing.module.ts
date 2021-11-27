import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartingComponent } from './charting/charting.component';
import { LabReportsComponent } from './lab-reports/lab-reports.component';
import { MedicationsComponent } from './medications/medications.component';

const routes: Routes = [
  { path: '', component: ChartingComponent },
  { path: 'chartings', component: ChartingComponent },
  { path: 'labs', component: LabReportsComponent },
  { path: 'medications', component: MedicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
