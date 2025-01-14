import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
})
export class ImageListComponent implements OnInit {
  uploadedImages: any[] = [];
  startDate: string = '';
  endDate: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit() {}

  fetchImage() {
    if (this.startDate && this.endDate) {
      this.imageService
        .getImagesBetweenDates(this.startDate, this.endDate)
        .subscribe({
          next: (images) => {
            this.uploadedImages = images;
          },
          error: (err) => console.error(err),
        });
    } else {
      alert('Please select start and end dates.');
    }
  }
}
