import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartingComponent } from './charting/charting.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { LabReportsComponent } from './lab-reports/lab-reports.component';
import { VisitSchedulesComponent } from './visit-schedules/visit-schedules.component';
import { PmpFooterComponent } from './pmp-footer/pmp-footer.component';
import { PmpNavigationComponent } from './pmp-navigation/pmp-navigation.component';
import { MedicationsComponent } from './medications/medications.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartingComponent,
    LabReportsComponent,
    VisitSchedulesComponent,
    PmpFooterComponent,
    PmpNavigationComponent,
    MedicationsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule 
  ],
  exports: [PmpFooterComponent, PmpNavigationComponent, VisitSchedulesComponent, LabReportsComponent, MedicationsComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

