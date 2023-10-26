import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PartecipantsService } from 'src/app/services/partecipants.service';
import { Tipology } from 'src/app/interfaces/tipology';
import { CoursesService } from 'src/app/services/courses.service';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  @Input()
  users!: Observable<any[]>

  constructor(private router: Router,
    private partecipantsSrv: PartecipantsService,
    private courseSrv: CoursesService,
    private notificationSrv: NotificationService

  ) {
    notificationSrv.getUserAlert()
    
  }

  redirect(id: any) {
    this.partecipantsSrv.listCourses(id);
    this.courseSrv.getOne(id);
    this.notificationSrv.getUserAlert()

    this.router.navigate(['course']);
  }
}
