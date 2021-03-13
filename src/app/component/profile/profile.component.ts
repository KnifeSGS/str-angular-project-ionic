import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
  // user$: BehaviorSubject<User[]> = this.userService.userData$;

  user: User = new User();

  constructor(
    public photoService: PhotoService,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params =>
        this.userService.getOne(params.id).subscribe(
          user => {
            this.user = user || new User();
          }
        )
    );
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  onSubmit(form: NgForm): void {
    this.userService.update(this.user).subscribe(() => this.router.navigate(['/tabs/tab3']));
  }

}
