import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutlineComponent } from './outline/outline.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path: '',
    component: OutlineComponent
  },
  {
    path: 'video/:id',
    component: VideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
