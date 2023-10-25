import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Partecipant18 } from 'src/app/interfaces/partecipant18';
import { PartecipantsService } from 'src/app/services/partecipants.service';

@Component({
  selector: 'app-partecipant-detail',
  templateUrl: './partecipant-detail.component.html',
  styleUrls: ['./partecipant-detail.component.css']
})
export class PartecipantDetailComponent {
  @Input()
  partecipant!: any;

  @Input()
  listaMinori!: boolean

  constructor(public activeModal: NgbActiveModal,
    private partecipantsSrv: PartecipantsService) { }

  updateDocumentP(event: any, parentId: string) {
    this.partecipantsSrv.updateParent(parentId, String(event.target.checked))
  }
  updateDocumentD(event: any, delegateId: string) {
    this.partecipantsSrv.updateDelegate(delegateId, String(event.target.checked))
  }
}
