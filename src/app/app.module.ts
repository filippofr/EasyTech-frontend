import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { CourseComponent } from './pages/course/course.component';
import { PartecipantComponent } from './components/partecipant/partecipant.component';
import { PartecipantDetailComponent } from './components/partecipant-detail/partecipant-detail.component';
import { WaitingListComponent } from './components/waiting-list/waiting-list.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ListCoursesComponent } from './pages/list-courses/list-courses.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    CourseComponent,
    PartecipantComponent,
    PartecipantDetailComponent,
    WaitingListComponent,
    NotificationsComponent,
    CourseCardComponent,
    ListCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: LOCALE_ID, useValue: 'it-IT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
