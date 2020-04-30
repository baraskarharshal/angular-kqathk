import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app.routing.module';
import { SimpleFileUploadComponent } from './simple-file-upload/simple-file-upload.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SidebarComponent, SimpleFileUploadComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
