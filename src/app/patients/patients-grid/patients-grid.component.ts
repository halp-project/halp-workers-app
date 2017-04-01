import { Component, OnInit, Input, Output, OnChanges, SimpleChange, EventEmitter } from '@angular/core';

import { Patient } from './patient';

@Component({
  selector: 'app-patients-grid',
  templateUrl: './patients-grid.component.html',
  styleUrls: ['./patients-grid.component.css']
})
export class PatientsGridComponent implements OnInit, OnChanges {

  @Input() newPatient: Patient;
  @Output() editedPatient: EventEmitter<Patient> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propertyName in changes) {
      let changedProperty = changes[propertyName];
      if (!changedProperty.isFirstChange()) {
        this.patients.push(changedProperty.currentValue);
      }
    }
  }

  deletePatient(patientId) {
    this.patients.splice(patientId, 1);
  }

  editPatient(patient) {
    this.editedPatient.emit(patient);
  }

  patients: Patient[] = [
    {
      name: 'Georgios',
      age: 22,
      id: 1,
      description: 'Chico Griego',
      username: 'Georiord',
      password: '1234567890',
    },
    {
      name: 'Jorge',
      age: 22,
      id: 2,
      description: 'Chico',
      username: 'Jorgeee',
      password: '2424242424',
    },
    {
      name: 'Emilio',
      age: 22,
      id: 3,
      description: 'Chico',
      username: 'Emiliooo',
      password: '0987654321',
    },
    {
      name: 'Jose',
      age: 22,
      id: 4,
      description: 'Chico Jose',
      username: 'Joseee',
      password: 'ABCDEFGHIJ',
    },
  ];

}
