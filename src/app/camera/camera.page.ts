import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  providers: [PhotoService], // Asegúrate de que está aquí

})
export class CameraPage implements OnInit {
  capturedImage: string = '';

  constructor(public   photoService: PhotoService) {}

  ngOnInit() {}

  takePicture() {
    this.photoService.addNewToGallery();
    this.capturedImage = '';
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  
  }
}
