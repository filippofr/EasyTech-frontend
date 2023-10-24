import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  currentUser$ = this.authSrv.currentUser$;
  user: User | null = null;
  courses = this.courseSrv.listCourses();

  constructor(
    protected authSrv: AuthService,
    private offcanvasService: NgbOffcanvas,
    private courseSrv: CoursesService
  ) {
    this.currentUser$.subscribe(user => {
      if (user) {
        this.user = user;
      }
    })
  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  logout() {
    this.authSrv.logout();
  }
}
