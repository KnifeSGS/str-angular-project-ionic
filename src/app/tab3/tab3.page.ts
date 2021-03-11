import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  title: string = 'Profile';

  user: User = new User();
  user$: BehaviorSubject<User[]> = this.userService.userData$;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getAll()
    this.chooseUser()
  }

  chooseUser(): void {
    this.user$.subscribe((userArray) => {
      userArray.filter(item => {
        this.user = item;
        this.getData(item)
      });
    })
  }

  getData(item) {
    this.user = item
  }
}
