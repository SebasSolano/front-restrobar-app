import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
