import { Component, OnInit } from '@angular/core';
import { LabReportCrudServiceRuby } from "../shared/lab_crud.service";

@Component({
  selector: 'app-view-labworks',
  templateUrl: './view-labworks.component.html',
  styleUrls: ['./view-labworks.component.css']
})
export class ViewLabworksComponent implements OnInit {

  reports: any = []

  constructor(public crudService: LabReportCrudServiceRuby) { }

  ngOnInit(): void { 
    this.fetchLabReports(); 
    this.addLabReport(
      'labId', 
      'patientId', 
      'doctorId', 
      'labworkName',
      'labworkFilePath',
      'patientReportFilePath',
      new Date(),
      'description'
    )
  }

  fetchLabReports() {
    return this.crudService.getLabReports().subscribe((res: {}) => {
      this.reports = res;
      //alert(JSON.stringify(res));
    })
  }

  addLabReport(labId:string, doctorId:string, patientId:string,labworkName:string,labworkFilePath:string, patientReportFilePath:string, dueBy: Date ,description:string){
    this.crudService.addLabReport({
      labId, 
      patientId, 
      doctorId, 
      labworkName,
      labworkFilePath,
      patientReportFilePath,
      dueBy,
      description
    }).subscribe(res=> {
      alert(JSON.stringify(res));
      this.fetchLabReports()
    })
  }

  /*
  fetchLabReports() {
    return this.crudService.getLabReports().subscribe((res: {}) => {
      this.reports = res;
      alert(res);
    })
  }

  fetchLabReport(labId:string, doctorId:string, patientId:string){
    return this.crudService.getLabReport(labId, patientId, doctorId).subscribe((res: {}) => {
      this.reports = res;
    })
  }

  deleteLabReport(labId:string, doctorId:string, patientId:string){
    this.crudService.deleteLabReport(labId, patientId, doctorId).subscribe(res => {
      this.fetchLabReports()
    })
  }

  updateLabReport(labId:string, doctorId:string, patientId:string,labworkName:string,labworkFilePath:string, patientReportFilePath:string ,description:string){
    this.crudService.updateLabReport({
      labId, 
      patientId, 
      doctorId, 
      labworkName,
      labworkFilePath,
      patientReportFilePath,
      description
    }).subscribe(res=> {
      this.fetchLabReports()
    })
  }
  */
}
