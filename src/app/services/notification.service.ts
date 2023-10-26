import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tipology } from '../interfaces/tipology';
import { PartecipantsService } from './partecipants.service';
import { Partecipant18 } from '../interfaces/partecipant18';
import { PartecipantU } from '../interfaces/partecipantU';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private tipologiesSubject = new BehaviorSubject<Tipology[]>([]);
  tipologies$ = this.tipologiesSubject.asObservable();

  constructor(private partecipantsrv: PartecipantsService) {}

  updateTipologies(tipologies: Tipology[]) {
    const updatedTipologies = tipologies.map((tipology) => ({
      ...tipology,
      cssClass: this.getCssClass(tipology.startDate, tipology.id)
    }));
    this.tipologiesSubject.next(updatedTipologies);
  }

  private getUsersList(id: string): boolean {
    let check = true;
    this.partecipantsrv.listCourses(id);
    this.partecipantsrv.partecipants$.forEach(function(user) {
      if (checkValue(user) == false) {
        check =  false
      }
    });
    return check;
  }

  private getCssClass(startDate: Date, id: string): string {
    startDate = new Date(startDate);
    const today = new Date();
    const timeDifference = startDate.getTime() - today.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let check = this.getUsersList(id)

    console.log(check);
    if (daysDifference < 7 && !check) {
      return 'danger'; // Red
    } else if (daysDifference < 14 &&!check) {
      return 'warning'; // yellow
    } else if (daysDifference < 21) {
      return 'info'; // blue
    } else {
      return 'primary'; // Default Bootstrap alert class
    }
  }
}
function checkValue(user: any ): boolean {
  if(user.iscriptionForm && user.privacyAccepted && user.paymentVerified) {
    return true;
  } else {
    return false;
  }
}

