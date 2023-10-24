import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partecipant18 } from '../interfaces/partecipant18';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartecipantsService {
  private _partecipants$ = new BehaviorSubject<Partecipant18[]>([]);
  partecipants$ = this._partecipants$.asObservable();

  constructor(private http: HttpClient) {
  }

  
  listCourses(courseId?: string) {
    this.http.post<Partecipant18[]>(`/api/partecipant/find`, { tipologyId: courseId })
      .subscribe(partes => this._partecipants$.next(partes));
  }
}
