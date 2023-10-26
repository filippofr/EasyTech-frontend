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

  private tipologiesSubject = new BehaviorSubject<any[]>([]);
  tipologies$ = this.tipologiesSubject.asObservable();

  partecipants: any[] = [];

  constructor(private partecipantsrv: PartecipantsService) {
    partecipantsrv.all$.subscribe(parts => {
      if (parts.length) {
        this.partecipants = parts;
      }
    })
  }

  // updateTipologies(tipologies: Tipology[]) {
  //   const updatedTipologies = tipologies.map((tipology) => ({
  //     ...tipology,
  //     cssClass: this.getCssClass(tipology.startDate, tipology.id)
  //   }));
  //   this.tipologiesSubject.next(updatedTipologies);
  // }

  getUserAlert() {
    const arr: any[] = [];
    // this.partecipantsrv.listCourses(id);
    this.partecipants.forEach(user => {
      // if (checkValue(user) == false) {
      //   check =  false
      // }
      if (!this.check(user)) {
        arr.push({
          ...user,
          cssClass: this.getCssClass(user.tipology.startDate)
        })
      }

      this.tipologiesSubject.next(arr);
    });
  }

  private check(user: any) {
    return user.completed ? true : false;
  }

  private getCssClass(startDate: Date): string {
    startDate = new Date(startDate);
    const today = new Date();
    const timeDifference = startDate.getTime() - today.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 7 ) {
      return 'danger'; // Red
    } else if (daysDifference < 14) {
      return 'warning'; // yellow
    } else if (daysDifference < 21) {
      return 'info'; // blue
    } else {
      return 'primary'; // Default Bootstrap alert class
    }
  }
}
function checkValue(user: any ): boolean {
  if(!!user.iscriptionForm && !!user.privacyAccepted && !!user.paymentDone) {
    return true;
  } else {
    return false;
  }
}

