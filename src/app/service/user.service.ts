import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { LocationService } from './location.service';
import { InterestService } from './interest.service';
import { BaseService } from '../service/base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  // userDataUrl: string = 'http://localhost:3000/user';

  // userData$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  // userData2$: Observable<User[]> = new Observable<User[]>();

  constructor(
    public http: HttpClient,
    public location: LocationService,
    public interest: InterestService,
    public config: ConfigService
  ) {
    super(http, config, 'users')
  }

  // getAll(): void {
  //   this.http.get<User[]>(this.userDataUrl)
  //     .subscribe(users => this.userData$.next(users))
  // }

  // getAllOld(): Observable<User[]> {
  //   return this.http.get<User[]>(this.userDataUrl)
  // }

  // getOne(id: number): Observable<User> {
  //   return Number(id) === 0 ? of(new User()) : this.http.get<User>(`${this.userDataUrl}/${Number(id)}`);
  //   // return this.http.get<User>(`${this.userDataUrl}/${id}`)
  // }

  // update(user: User): Observable<User | undefined> {
  //   return this.http.patch<User>(`${this.userDataUrl}/${user.id}`, user)
  //     .pipe(
  //       tap(() => this.getAll())
  //     )
  // }

}
