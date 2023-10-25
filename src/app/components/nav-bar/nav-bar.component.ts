import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { CoursesService } from 'src/app/services/courses.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  currentUser$ = this.authSrv.currentUser$;
  user: User | null = null;
  courses!: Observable<any[]>;
  constructor(
    protected authSrv: AuthService,
    private offcanvasService: NgbOffcanvas,
    private courseSrv: CoursesService,
    private notificationService: NotificationService
  ) {
    this.currentUser$.subscribe(user => {
      if (user) {
        this.user = user;
      }
    })
    this.updateTipologies()
  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  logout() {
    this.authSrv.logout();
  }

  updateTipologies() {
    // Simulate updating the tipologies list
    // You can replace this with your actual data retrieval logic
    this.courseSrv.listCourses().subscribe((courses) => {
      this.notificationService.updateTipologies(courses);
    });
    this.courses = this.notificationService.tipologies$;
  }
}
