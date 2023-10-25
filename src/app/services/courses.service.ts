import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tipology } from '../interfaces/tipology';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _course$ = new Subject<Tipology>;
  course$ = this._course$.asObservable();

  constructor(private http: HttpClient) { }

  listCourses() {
    return this.http.get<Tipology[]>(`/api/tipology/list`);
  }

  getOne(id: string) {
    this.http.post<Tipology>(`/api/tipology/getOne`, { id })
      .subscribe(course => {
        if (course) {
          this._course$.next(course);
        }
      })
  }
}
