import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Interest } from 'src/app/model/interest';
import { User } from 'src/app/model/user';
import { InterestService } from 'src/app/service/interest.service';
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
  interests$: Observable<Interest[]> = this.interestService.list$
  interests: Interest[];
  userInterests: Interest[] = [];

  constructor(
    public photoService: PhotoService,
    private userService: UserService,
    private interestService: InterestService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.interestService.getAll();
  }

  ngOnInit() {
    this.userService.getAll()
    this.activatedRoute.params.subscribe(
      params =>
        this.userService.getOne(params.id).subscribe(
          user => {
            this.user = user || new User();
            this.getInterest();
          }
        )
    );

    this.interests$.subscribe(
      (item) => this.interests = item
    )

  }

  inter: Interest
  getInterest(): void {
    for (const ints of this.user.interestsID) {
      this.interestService.getOne(ints).subscribe(
        interest => {
          this.inter = interest || new Interest();
          this.userInterests.push(this.inter)
        }
      );
    }
    this.user.interests = this.userInterests;
    [...new Set(this.userInterests)];
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  onSubmit(form: NgForm): void {
    this.userService.update(this.user).subscribe(() => this.router.navigate(['/tabs/tab3']));
  }

  itemIdentity(index, item) {
    // console.log("index:{i}, item:{s}", index, item)
    return index;
  }

}
