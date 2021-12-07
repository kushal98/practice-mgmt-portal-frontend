import { Component, OnInit } from '@angular/core';
import {MedicationCrudServiceRuby } from "../shared/medication_crud.service";

@Component({
  selector: 'app-view-medications',
  templateUrl: './view-medications.component.html',
  styleUrls: ['./view-medications.component.css']
})
export class ViewMedicationsComponent implements OnInit {

  medications: any = []
  constructor(public crudService: MedicationCrudServiceRuby) { } 

  ngOnInit(): void { this.fetchMedications(); }

  fetchMedications() {
    return this.crudService.getMedications().subscribe((res: {}) => {
      this.medications = res;
    })
  }

  fetchMedication(medicationId:string, doctorId:string, patientId:string){
    return this.crudService.getMedication(medicationId, patientId, doctorId).subscribe()
  }

  deleteMedication(medicationId:string, doctorId:string, patientId:string){
    this.crudService.deleteMedication(medicationId, patientId, doctorId).subscribe(res => {
      this.fetchMedications()
    })
  }

  updateMedication(medicationId:string, doctorId:string, patientId:string, medicationName:string, Cycle:Number, When:Number , Timing:Number, description:string){
    this.crudService.updateMedication({
      medicationId, 
      patientId, 
      doctorId, 
      medicationName,
      Cycle,
      When,
      Timing,
      description
    }).subscribe(res => {
      this.fetchMedications()
    })
  }

}