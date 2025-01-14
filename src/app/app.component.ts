import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ImageListComponent } from "./components/image-list/image-list.component";

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, FormsModule, ImageUploadComponent, ImageListComponent],
  template: `
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-center mt-10">
        Image Processor- RestoBar
      </h1>

      <app-image-upload></app-image-upload>
      <app-image-list></app-image-list>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
