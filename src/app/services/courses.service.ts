import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tipology } from '../interfaces/tipology';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  listCourses() {
    return this.http.get<Tipology[]>(`/api/tipology/list`);
  }
}
