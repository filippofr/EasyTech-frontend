import { Component, OnDestroy, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil } from 'rxjs';
import { PartecipantDetailComponent } from 'src/app/components/partecipant-detail/partecipant-detail.component';
import { Partecipant18 } from 'src/app/interfaces/partecipant18';
import { CoursesService } from 'src/app/services/courses.service';
import { PartecipantsService } from 'src/app/services/partecipants.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  public isCollapsed = true;
  partecipants: any[] = [];
  courseName = '';
  courseStart!: Date;
  listaMinori = false;


  private destroyed$ = new Subject<void>();

  checksForm = this.fb.group({
    paymentDone: [null],
    paymentVerified: [null],
    privacyAccepted: [null],
    imageReleaseAccepted: [null],
    iscriptionForm: [null]
  })

  constructor(private partecipantsSrv: PartecipantsService,
    private courseSrv: CoursesService,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder) {
    courseSrv.course$.subscribe(course => {
      if (course) {
        this.courseName = course.title;
        this.courseStart = course.startDate;
        if (course.id === '6536945f4f594167cf812e00' ||
          course.id === '6536948a4f594167cf812e03' ||
          course.id === '653695404f594167cf812e0f') {
          this.listaMinori = true;
        } else {
          this.listaMinori = false;
        }
      }
    })
    partecipantsSrv.partecipants$.subscribe(parts => {
      if (parts.length) {
        this.partecipants = parts;
      } else {
        this.partecipants = [];
      }
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  open(partecipant: any) {
    const modalRef = this.modalService.open(PartecipantDetailComponent);
    modalRef.componentInstance.partecipant = partecipant;
    modalRef.componentInstance.listaMinori = this.listaMinori;
  }

  updatePayment(event: any, partecipantId: string) {
    const body = {
      paymentDone: String(event.target.checked)
    }
    if (this.listaMinori) {
      this.partecipantsSrv.updateU(partecipantId, body)
    } else {
      this.partecipantsSrv.update18(partecipantId, body)
    }
  }

  updatePrivacy(event: any, partecipantId: string) {
    const body = {
      privacyAccepted: String(event.target.checked)
    }
    if (this.listaMinori) {
      this.partecipantsSrv.updateU(partecipantId, body)
    } else {
      this.partecipantsSrv.update18(partecipantId, body)
    }
  }

  updateImgRelease(event: any, partecipantId: string) {
    const body = {
      imageReleaseAccepted: String(event.target.checked)
    }
    if (this.listaMinori) {
      this.partecipantsSrv.updateU(partecipantId, body)
    } else {
      this.partecipantsSrv.update18(partecipantId, body)
    }
  }

  updateInscription(event: any, partecipantId: string) {
    const body = {
      iscriptionForm: String(event.target.checked)
    }
    if (this.listaMinori) {
      this.partecipantsSrv.updateU(partecipantId, body)
    } else {
      this.partecipantsSrv.update18(partecipantId, body)
    }
  }

  updateDocument(event: any, partecipantId: string) {
    const body = {
      documentCopy: String(event.target.checked)
    }
    if (this.listaMinori) {
      this.partecipantsSrv.updateU(partecipantId, body)
    } else {
      this.partecipantsSrv.update18(partecipantId, body)
    }
  }

  
}
