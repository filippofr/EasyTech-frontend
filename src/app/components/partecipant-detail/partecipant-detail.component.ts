import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Partecipant18 } from 'src/app/interfaces/partecipant18';

@Component({
  selector: 'app-partecipant-detail',
  templateUrl: './partecipant-detail.component.html',
  styleUrls: ['./partecipant-detail.component.css']
})
export class PartecipantDetailComponent {
  @Input()
  partecipant!: Partecipant18;

  constructor(public activeModal: NgbActiveModal) { }
}
