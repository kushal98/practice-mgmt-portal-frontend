import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ChartingComponent } from './charting/charting.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { DoctorFinderComponent } from './doctor-finder/doctor-finder.component';
import { DoctorInfoComponentComponent } from './doctor-info-component/doctor-info-component.component';
import { DoctorsPageComponent } from './doctors-page/doctors-page.component';
import { EditLabworksComponent } from './edit-labworks/edit-labworks.component';
import { EditMedicationsComponent } from './edit-medications/edit-medications.component';
import { LabReportsComponent } from './lab-reports/lab-reports.component';
import { MedicationsComponent } from './medications/medications.component';
import { MessagesComponent } from './messages/messages.component';
import { NewLabworksComponent } from './new-labworks/new-labworks.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { NewMedicationsComponent } from './new-medications/new-medications.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotesFreeTextComponent } from './notes-free-text/notes-free-text.component';
import { NotesPointClickComponent } from './notes-point-click/notes-point-click.component';
import { NotesVoiceoverComponent } from './notes-voiceover/notes-voiceover.component';
import { NursesPageComponent } from './nurses-page/nurses-page.component';
import { PatientFinderComponent } from './patient-finder/patient-finder.component';
import { PatientRecordsComponent } from './patient-records/patient-records.component';
import { PracticeManagersPageComponent } from './practice-managers-page/practice-managers-page.component';
import { ProgressnotesComponent } from './progressnotes/progressnotes.component';
import { ViewLabworksComponent } from './view-labworks/view-labworks.component';
import { ViewMedicationsComponent } from './view-medications/view-medications.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';

const routes: Routes = [
  /* --- 
    Nurse Subsystem Routes 
    Can see Patient Records
    - Charting
    - Demographics
    - Labs (only View)
    - Medications (only View)
  --- */
  {
    path: 'nurse', component: NursesPageComponent,
    children: [
      {path: '', component: CoverPageComponent},
      {path: '', component: PatientFinderComponent, outlet:'secondary'},
      { 
        path: 'patient-records', component: PatientRecordsComponent,
        children: [
          { path: '', component: PatientInfoComponent, outlet:'navigation'},
          { path: '', component: ChartingComponent},
          { path: 'chartings', component: ChartingComponent},
          { path: 'demographics', component: DemographicsComponent },
          { 
            path: 'labs', component: LabReportsComponent,
            children: [
              {path: '', component: ViewLabworksComponent},
              {path: 'view', component: ViewLabworksComponent}
            ]
          },
          { 
            path: 'medications', component: MedicationsComponent,
            children: [
              {path: '', component: ViewMedicationsComponent},
              {path: 'view', component: ViewMedicationsComponent}
            ]
          }
        ]
      }
    ]
  },

  /* --- 
    Doctor Subsystem 
    Can see Patients Records
    - Chartings
    - Demographics
    - Labs
    - Medications
    - Messages
    - Progress Notes
  --- */
  {
    path: 'doctor', component: DoctorsPageComponent,
    children: [
      {path: '', component: CoverPageComponent},
      {path: '', component: PatientFinderComponent, outlet:'secondary'},
      { 
        path: 'patient-records', component: PatientRecordsComponent,
        children: [
          { path: '', component: PatientInfoComponent, outlet:'navigation'},
          { path: '', component: ChartingComponent},
          { path: 'chartings', component: ChartingComponent},
          { path: 'demographics', component: DemographicsComponent },
          { 
            path: 'labs', component: LabReportsComponent,
            children: [
              {path: '', component: ViewLabworksComponent},
              {path: 'view', component: ViewLabworksComponent},
              {path: 'new', component: NewLabworksComponent},
              {path: 'edit', component: EditLabworksComponent}
            ]
          },
          { 
            path: 'medications', component: MedicationsComponent,
            children: [
              {path: '', component: ViewMedicationsComponent},
              {path: 'view', component: ViewMedicationsComponent},
              {path: 'new', component: NewMedicationsComponent},
              {path: 'edit', component: EditMedicationsComponent}
            ]
          },
          { path: 'messages', component: MessagesComponent}, 
          { 
            path: 'progressnotes', component: ProgressnotesComponent,
            children: [
              {path: '', component: ViewNotesComponent},
              {path: 'view', component: ViewNotesComponent},
              {
                path: 'new',
                children: [
                  {path: 'pointclick', component: NotesPointClickComponent},
                  {path: 'freetext', component: NotesFreeTextComponent},
                  {path: 'voiceover', component: NotesVoiceoverComponent}
                ]
              }
            ]
          },
        ]
      }
    ]
  },


  /* --- 
    Practice Manager Subsystem 
    Can see Patients Records
    - Chartings
    - Demographics
    - Labs
    - Medications

    Can see Doctor Records
    - Individual Doctor details

  --- */
  {
    path: 'practice-manager', component: PracticeManagersPageComponent,
    children: [
      {path: '', component: CoverPageComponent},
      {path: '', component: PatientFinderComponent, outlet:'secondary'},
      {path: '', component: DoctorFinderComponent, outlet:'terinary'},
      { 
        path: 'patient-records', component: PatientRecordsComponent,
        children: [
          { path: '', component: PatientInfoComponent, outlet:'navigation'},
          { path: '', component: ChartingComponent},
          { path: 'chartings', component: ChartingComponent},
          { path: 'demographics', component: DemographicsComponent },
          { 
            path: 'labs', component: LabReportsComponent,
            children: [
              {path: '', component: ViewLabworksComponent},
              {path: 'view', component: ViewLabworksComponent},
            ]
          },
          { 
            path: 'medications', component: MedicationsComponent,
            children: [
              {path: '', component: ViewMedicationsComponent},
              {path: 'view', component: ViewMedicationsComponent},
            ]
          }
        ]
      }
    ]
  },

  {path: 'settings', component: AccountSettingsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
