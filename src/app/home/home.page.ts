/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable no-var */
import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private imagePicker: ImagePicker) {}

  imagePick() {
    const options= {
      maximumImagesCount: 2,
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => {
      console.log('err:',err);
     });
  }
}
