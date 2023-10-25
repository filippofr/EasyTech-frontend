import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tipology } from '../interfaces/tipology';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

 private tipologiesSubject = new BehaviorSubject<Tipology[]>([]);
  tipologies$ = this.tipologiesSubject.asObservable();

  updateTipologies(tipologies: Tipology[]) {
    const updatedTipologies = tipologies.map((tipology) => ({
      ...tipology,
      cssClass: this.getCssClass(tipology.startDate)
    }));
    this.tipologiesSubject.next(updatedTipologies);
  }

  private getCssClass(startDate: Date): string {
    startDate = new Date(startDate);
    const today = new Date();
    const timeDifference = startDate.getTime() - today.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 7) {
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