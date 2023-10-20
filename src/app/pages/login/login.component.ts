import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  loginForm = this.fb.group({
    username: ['', { validators: Validators.required }],
    password: ['', { validators: Validators.required }]
  })

  loginError = '';
  isFormSubmitted = false;
  
  private destroyed$ = new Subject<void>();

  constructor(protected fb: FormBuilder,
    private authSrv: AuthService,
    private router: Router) { }


  ngOnInit(): void {
    this.isFormSubmitted = false;
    this.loginForm.valueChanges
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.loginError = '';
      });    
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  login() {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authSrv.login(username!, password!)
        .pipe(
          catchError(err => {
            this.loginError = err.error.message;
            return throwError(() => err);
          })
        )
        .subscribe(() => {
          this.authSrv.userLogedIn();
          this.router.navigate(['home'])
        });
    }
  }
}

