import { Component, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PartecipantDetailComponent } from 'src/app/components/partecipant-detail/partecipant-detail.component';
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
  courseStart!: Date;

  constructor(private partecipantsSrv: PartecipantsService,
    private router: Router,
    private modalService: NgbModal) {
    partecipantsSrv.partecipants$.subscribe(parts => {
      if (parts.length != 0) {
        this.partecipants = parts;
        this.courseName = parts[0].tipology.title;
        this.courseStart = parts[0].tipology.startDate;
      }
    })
  }

  open(partecipant: any) {
    const modalRef = this.modalService.open(PartecipantDetailComponent);
    modalRef.componentInstance.partecipant = partecipant;
  }
}
