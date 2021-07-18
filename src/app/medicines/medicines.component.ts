import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../prescription.service';
import { Meds } from '../Meds';
import { keyframes } from '@angular/animations';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  medicines: Meds[] = [];
  selectedDrug?: Meds;
  errorMessage?: string;

  constructor(private drugService: PrescriptionService) { }

  ngOnInit(): void {
    this.getDrugs();
  }

  // Approach 1
  ///**
  getDrugs(): void{
    this.drugService.getPrescription().subscribe(medicines => {Object.values(medicines).map(item => this.medicines = Object.values(item))},
    err => console.error(err),
    () => console.log('Complete')
    );
  }
   //*/
   
  // Approach 2
  /** 
  getDrugs(): void{
    this.drugService.getPrescription()
    .subscribe({
      next: (medicines: Meds[]) => {
        Object.values(medicines).map(item => this.medicines = Object.values(item));
        console.log(medicines);
      },
      error: err => this.errorMessage = err
  });
  }
   */

  onSelect(medicines: Meds): void{
    this.selectedDrug = medicines;
  }

}
