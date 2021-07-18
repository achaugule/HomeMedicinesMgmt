import { Component, OnInit } from '@angular/core';
import { Meds } from '../Meds';
import { MedsSerachComponent } from '../meds-serach/meds-serach.component';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-add-meds',
  templateUrl: './add-meds.component.html',
  styleUrls: ['./add-meds.component.css']
})
export class AddMedsComponent implements OnInit {

  constructor(private drugService: PrescriptionService) { }

  newMeds: Meds[] = [];
  model: Meds = {
    Id: 0,
    Name: 'Default',
    Amount: 0,
    ExpiryDate: 'Jan-0000',
    Description: 'Default',
    IsActive: false,
  };

  newMed(Name: string, Amount: number, ExpiryDate: string, Description: string, IsActive: boolean){
    this.model.Name = Name;
    this.model.Amount = Amount;
    this.model.ExpiryDate = ExpiryDate;
    this.model.Description = Description;
    this.model.IsActive = IsActive;

    //console.log(this.model);
    this.drugService
    .addPrescription(this.model)
    .subscribe(newmeds => 
      {console.log('subscribe callback: ', this.newMeds.push(newmeds))}
      );
  }


  ngOnInit(): void {
  }

}
