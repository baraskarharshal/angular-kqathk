import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SimpleFileUploadComponent } from './simple-file-upload/simple-file-upload.component';

const routes: Routes = [

  {
    path: 'simple-ng-select',
    component: SimpleFileUploadComponent,
  },
    {
    path: '',
    redirectTo: 'simple-ng-select',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
