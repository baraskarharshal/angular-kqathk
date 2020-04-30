import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-file-upload',
  templateUrl: './simple-file-upload.component.html',
  styleUrls: ['./simple-file-upload.component.css']
})
export class SimpleFileUploadComponent implements OnInit {

  imageUrl: string | ArrayBuffer;
  file: File;
  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
    this.file = event.target.files[0];
    this.showPreview();
  }

  showPreview() {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.imageUrl = e.target['result'];
    };
    reader.readAsDataURL(this.file);
  }

  remove() {
    this.file = null;
    this.imageUrl = '';
  }

}