import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  title: string = 'Home';

  users$: BehaviorSubject<User[]> = this.userService.userData$;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getAll()
  }

}
