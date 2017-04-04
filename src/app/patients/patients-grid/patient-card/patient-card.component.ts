import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Patient } from '../patient';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  @Input() patient: Patient;
  @Output() _delete: EventEmitter<number> = new EventEmitter();
  @Output() _edit: EventEmitter<Patient> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this._delete.emit(this.patient.id);
  }

  edit() {
    this._edit.emit(this.patient);
  }
}
