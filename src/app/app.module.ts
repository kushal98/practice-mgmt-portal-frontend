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
import { ViewLabworksComponent } from './view-labworks/view-labworks.component';
import { NewLabworksComponent } from './new-labworks/new-labworks.component';
import { EditLabworksComponent } from './edit-labworks/edit-labworks.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { MessagesComponent } from './messages/messages.component';
import { ProgressnotesComponent } from './progressnotes/progressnotes.component';
import { NewMedicationsComponent } from './new-medications/new-medications.component';
import { EditMedicationsComponent } from './edit-medications/edit-medications.component';
import { ViewMedicationsComponent } from './view-medications/view-medications.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartingComponent,
    LabReportsComponent,
    VisitSchedulesComponent,
    PmpFooterComponent,
    PmpNavigationComponent,
    MedicationsComponent,
    ViewLabworksComponent,
    NewLabworksComponent,
    EditLabworksComponent,
    DemographicsComponent,
    MessagesComponent,
    ProgressnotesComponent,
    NewMedicationsComponent,
    EditMedicationsComponent,
    ViewMedicationsComponent,  
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

