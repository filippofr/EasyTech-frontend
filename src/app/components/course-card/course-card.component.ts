import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Tipology } from 'src/app/interfaces/tipology';
import { CoursesService } from 'src/app/services/courses.service';
import { PartecipantsService } from 'src/app/services/partecipants.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input()
  course!: Tipology;

  constructor(private router: Router,
    private partecipantsSrv: PartecipantsService,
    private courseSrv: CoursesService
  ) { }

  redirect(course: Tipology) {
    this.courseSrv.getOne(course.id);
    this.partecipantsSrv.listCourses(course.id)
    this.router.navigate(['course']);
  }
}
