import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Meds } from '../Meds';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-meds-serach',
  templateUrl: './meds-serach.component.html',
  styleUrls: ['./meds-serach.component.css']
})
export class MedsSerachComponent implements OnInit {
  meds$?: Observable<Meds[]>;
  private searchTerms = new Subject<string>();

  constructor(private drugSearchService: PrescriptionService) { }

  // Push a search term into the observable stream. //The searchTerms becomes an Observable emitting a steady stream of search terms.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.meds$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.drugSearchService.searchMeds(term)),
    );
  }

}
