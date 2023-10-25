import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partecipant18 } from '../interfaces/partecipant18';
import { BehaviorSubject } from 'rxjs';
import { PartecipantU } from '../interfaces/partecipantU';
import { Parent } from '../interfaces/parent';
import { Delegate } from '../interfaces/delegate';

@Injectable({
  providedIn: 'root'
})
export class PartecipantsService {
  private _partecipants$ = new BehaviorSubject<any[]>([]);
  partecipants$ = this._partecipants$.asObservable();

  constructor(private http: HttpClient) {
  }

  
  listCourses(courseId?: string) {
    if (courseId === '6536945f4f594167cf812e00' ||
      courseId === '6536948a4f594167cf812e03' ||
      courseId === '653695404f594167cf812e0f') {
      //minori
      this.http.post<PartecipantU[]>(`/api/upartecipant/findU`, { tipologyId: courseId })
        .subscribe(partes => this._partecipants$.next(partes));
    } else {
      //maggiorenni
      this.http.post<Partecipant18[]>(`/api/partecipant/find`, { tipologyId: courseId })
        .subscribe(partes => this._partecipants$.next(partes));
    }
  }

  update18(partecipantId: string, body: any) {
    const {
      iscriptionForm,
      privacyAccepted,
      imageReleaseAccepted,
      paymentDone,
      paymentVerified
    } = body;

    this.http.patch<Partecipant18>(`/api/partecipant/update`, {
      partecipantId,
      iscriptionForm,
      privacyAccepted,
      imageReleaseAccepted,
      paymentDone,
      paymentVerified
    })
      .subscribe(updated => {
        const index = this._partecipants$.value.findIndex(i => i.id === partecipantId);
        const clone = structuredClone(this._partecipants$.value);
        clone[index] = updated;
        this._partecipants$.next(clone);
      });
  }

  updateParent(parentId: string, documentCopy: any) {
    this.http.patch<Parent>(`/api/uparent/update`, {
      parentId,
      documentCopy
    })
      .subscribe();
  }
  updateDelegate(delegateId: string, documentCopy: any) {
    this.http.patch<Delegate>(`/api/udelegate/update`, {
      delegateId,
      documentCopy
    })
      .subscribe();
  }

  updateU(partecipantId: string, body: any) {
    const {
      iscriptionForm,
      privacyAccepted,
      imageReleaseAccepted,
      paymentDone,
      paymentVerified,
      documentCopy
    } = body;

    this.http.patch<Partecipant18>(`/api/upartecipant/update`, {
      partecipantId,
      iscriptionForm,
      privacyAccepted,
      imageReleaseAccepted,
      paymentDone,
      paymentVerified,
      documentCopy
    })
      .subscribe(updated => {
        const index = this._partecipants$.value.findIndex(i => i.id === partecipantId);
        const clone = structuredClone(this._partecipants$.value);
        clone[index] = updated;
        this._partecipants$.next(clone);
      });
  }
}
