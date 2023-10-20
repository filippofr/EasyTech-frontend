import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map, tap } from "rxjs";
import { User } from "../interfaces/user";
import { JwtService as JWTService } from "./jwt.service";


@Injectable({ providedIn: 'root' })
export class AuthService implements OnInit {
  private _currentUser$ = new BehaviorSubject<User | null>(null);
  currentUser$ = this._currentUser$.asObservable();

  apiUrl = '';
  constructor(
    private jwtSrv: JWTService,
    private http: HttpClient,
    private router: Router
  ) {
    if (this.isLoggedIn()) {
      this.fetchUser();
    }

  }


  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.fetchUser();
    }
  }

  isLoggedIn() {
    return this.jwtSrv.hasToken();
  }

  login(username: string, password: string) {
    return this.http.post<{ user: User, token: string }>(this.apiUrl + '/api/login', { username, password })
      .pipe(
        tap(res => this.jwtSrv.setBankId(res.user.id!)),
        tap(res => this.jwtSrv.setToken(res.token)),
        tap(res => this._currentUser$.next(res.user)),
        map(res => res.user)
      );
  }

  logout() {
    this.jwtSrv.removeToken();
    this.jwtSrv.removeBankId();
    this._currentUser$.next(null);
    this.router.navigate(['home']);
  }

  userLogedIn() {
    this.fetchUser();
  }

  private fetchUser() {
    this.http.get<User>(this.apiUrl + '/api/users/me')
      .subscribe(user => this._currentUser$.next(user));
  }
}
