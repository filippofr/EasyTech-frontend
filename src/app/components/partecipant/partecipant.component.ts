import { Component, Input } from '@angular/core';
import { Partecipant18 } from 'src/app/interfaces/partecipant18';
import { PartecipantsService } from 'src/app/services/partecipants.service';

@Component({
  selector: 'app-partecipant',
  templateUrl: './partecipant.component.html',
  styleUrls: ['./partecipant.component.css']
})
export class PartecipantComponent {

  @Input()
  part!: Partecipant18;

  @Input()
  i!: number;

  constructor() { }
}
