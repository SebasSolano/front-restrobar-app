import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  imports: [FormsModule],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent implements OnInit {
  imageFile: File | null = null;
  name: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit() {}

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  uploadImage() {
    if (this.imageFile && this.name) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = (reader.result as string).split(',')[1];
        this.imageService.uploadImage(base64Image, this.name).subscribe({
          next: () => alert('Image uploaded successfully!'),
          error: (err) => console.error(err),
        });
      };
      reader.readAsDataURL(this.imageFile);
    } else {
      alert('Please select an image and enter a name');
    }
  }
}
