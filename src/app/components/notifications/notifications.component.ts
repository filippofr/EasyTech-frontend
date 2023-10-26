import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PartecipantsService } from 'src/app/services/partecipants.service';
import { Tipology } from 'src/app/interfaces/tipology';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  @Input() tipologies!: Observable<any[]>;

  constructor(private router: Router,
    private partecipantsSrv: PartecipantsService
  ) { }

  redirect(id: any) {
    this.partecipantsSrv.listCourses(id)
    this.router.navigate(['course']);
  }
/*
  redirectNewTab(id: any) {
    this.partecipantsSrv.listCourses(id)
    window.open("http://localhost:4200/course", '_blank');
  }
  */
  redirectNewTab(id: any) {
    
  }
}
