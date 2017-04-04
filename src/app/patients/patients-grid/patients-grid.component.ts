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

  patients: Patient[] = [
    {
      name: 'Melinda',
      age: 30,
      id: 1,
      description: 'Young woman.',
      username: 'meljohnson',
      password: 'thisisnotmypass',
      image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
      name: 'Melinda',
      age: 30,
      id: 2,
      description: 'Young woman.',
      username: 'meljohnson',
      password: 'thisisnotmypass',
      image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
      name: 'Melinda',
      age: 30,
      id: 3,
      description: 'Young woman.',
      username: 'meljohnson',
      password: 'thisisnotmypass',
      image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
      name: 'Melinda',
      age: 30,
      id: 4,
      description: 'Young woman.',
      username: 'meljohnson',
      password: 'thisisnotmypass',
      image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
      name: 'Melinda',
      age: 30,
      id: 5,
      description: 'Young woman.',
      username: 'meljohnson',
      password: 'thisisnotmypass',
      image: 'https://randomuser.me/api/portraits/women/76.jpg'
    },
    {
      name: 'Melinda',
      age: 30,
      id: 6,
      description: 'Young woman.',
      username: 'meljohnson',
      password: 'thisisnotmypass',
      image: 'https://randomuser.me/api/portraits/women/76.jpg'
    }
  ];

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

}
