import { Component, OnInit } from '@angular/core';
import {ImageTypes} from '../file-types.config';

@Component({
  selector: 'app-simple-file-upload',
  templateUrl: './simple-file-upload.component.html',
  styleUrls: ['./simple-file-upload.component.scss']
})
export class SimpleFileUploadComponent implements OnInit {

  imageUrl: string | ArrayBuffer;
  file: File;
  isLoading = false;
  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    if(!this.isImage(event.target.files[0].name)) {
      alert('Not a valid image file. Please upload image file.');
      return;
    }
    this.isLoading = true;
    console.log(event);
    this.file = event.target.files[0];
    this.showPreview();
  }

  isImage(fileName: string) {
    const fileType = fileName.substring(fileName.lastIndexOf('.') + 1);
    return ImageTypes.includes(fileType.toLocaleLowerCase());
  }

  showPreview() {
    this.imageUrl = '';
    let reader = new FileReader();
    reader.onload = (e) => {
      setTimeout(() => {
        this.imageUrl = e.target['result'];
        this.isLoading = false;
      }, 500)
    };
    reader.readAsDataURL(this.file);
  }

  remove() {
    this.file = null;
    this.imageUrl = '';
  }

}