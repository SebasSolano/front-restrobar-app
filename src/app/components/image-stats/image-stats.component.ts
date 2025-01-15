import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-image-stats',
  templateUrl: './image-stats.component.html',
  imports: [NgFor, CommonModule],
  styleUrls: ['./image-stats.component.css'],
})
export class ImageStatsComponent implements OnInit {
  stats: any[] = [];
  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.fetchStats()
  }

  fetchStats() {
    this.imageService.getImagesStats().subscribe({
      next: (stats) => {
        this.stats = stats;
        this.stats = this.stats.sort((a, b) => a._id - b._id);
      },
      error: (err) => console.error(err),
    });
  }
}
