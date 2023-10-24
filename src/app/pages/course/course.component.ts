import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Partecipant18 } from 'src/app/interfaces/partecipant18';
import { PartecipantsService } from 'src/app/services/partecipants.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  public isCollapsed = true;
  partecipants: Partecipant18[] = [];
  courseName = '';

  constructor(private partecipantsSrv: PartecipantsService,
    private router: Router) {
    partecipantsSrv.partecipants$.subscribe(parts => {
      if (parts.length != 0) {
        this.partecipants = parts;
        this.courseName = parts[0].tipology.title;
      }
    })
  }
}
