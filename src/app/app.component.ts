import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private imageService: ImageService) {}

  deleteAllImages() {
    if (confirm('Are you sure you want to delete all images?')) {
      this.imageService.deleteAllImages().subscribe({
        next: (response) => {
          alert(response.message);
        },
        error: (err) => {
          console.error(err);
          alert('An error occurred while deleting images');
        },
      });
    }
  }
}
