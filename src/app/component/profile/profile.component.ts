import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/service/photo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() { }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
