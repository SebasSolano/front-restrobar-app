import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-image-stats',
  templateUrl: './image-stats.component.html',
  imports: [NgFor],
  styleUrls: ['./image-stats.component.css'],
})
export class ImageStatsComponent implements OnInit {
  stats: any[] = [];
  constructor(private imageService: ImageService) {}

  ngOnInit() {}

  fetchStats() {
    this.imageService.getImagesStats().subscribe({
      next: (stats) => {
        this.stats = stats;
      },
      error: (err) => console.error(err),
    });
  }
}
