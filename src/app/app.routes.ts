import { Routes } from '@angular/router';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ImageStatsComponent } from './components/image-stats/image-stats.component';

export const routes: Routes = [
  { path: '', component: ImageUploadComponent },
  { path: 'list', component: ImageListComponent },
  { path: 'stats', component: ImageStatsComponent },
];
