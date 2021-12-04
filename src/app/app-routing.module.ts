import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartingComponent } from './charting/charting.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { EditLabworksComponent } from './edit-labworks/edit-labworks.component';
import { EditMedicationsComponent } from './edit-medications/edit-medications.component';
import { LabReportsComponent } from './lab-reports/lab-reports.component';
import { MedicationsComponent } from './medications/medications.component';
import { MessagesComponent } from './messages/messages.component';
import { NewLabworksComponent } from './new-labworks/new-labworks.component';
import { NewMedicationsComponent } from './new-medications/new-medications.component';
import { NotesFreeTextComponent } from './notes-free-text/notes-free-text.component';
import { NotesPointClickComponent } from './notes-point-click/notes-point-click.component';
import { NotesVoiceoverComponent } from './notes-voiceover/notes-voiceover.component';
import { ProgressnotesComponent } from './progressnotes/progressnotes.component';
import { ViewLabworksComponent } from './view-labworks/view-labworks.component';
import { ViewMedicationsComponent } from './view-medications/view-medications.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';

const routes: Routes = [
  { path: '', component: ChartingComponent},
  { path: 'chartings', component: ChartingComponent },
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
  { path: 'demographics', component: DemographicsComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
