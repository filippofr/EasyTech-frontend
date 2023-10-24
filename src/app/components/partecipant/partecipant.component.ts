import { Component } from '@angular/core';
import { Partecipant18 } from 'src/app/interfaces/partecipant18';
import { PartecipantsService } from 'src/app/services/partecipants.service';

@Component({
  selector: 'app-partecipant',
  templateUrl: './partecipant.component.html',
  styleUrls: ['./partecipant.component.css']
})
export class PartecipantComponent {

  partecipants: Partecipant18[] = [];

  constructor(private partecipantsSrv: PartecipantsService) {
    partecipantsSrv.partecipants$.subscribe(parts => {
      if (parts) {
        this.partecipants = parts;
        console.log(parts);
      }
    })
  }
}
