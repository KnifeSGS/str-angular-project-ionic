import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { PhotoService } from 'src/app/service/photo.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  // @Input() user$: Observable<User> = this.userService.getOne(1);
  user$: BehaviorSubject<User[]> = this.userService.userData$;
  user: User = new User();

  constructor(
    public photoService: PhotoService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user$.subscribe((userArray) => {
      userArray.filter(item => this.user = item)
    })
    // this.user$.subscribe((user) => this.user = user)
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  onSubmit(): void {
    this.userService.update(this.user).subscribe(() => this.router.navigate(['/tabs/tab3']));
  }

}
