import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, FormsModule],
  template: `
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold text-center mt-10">Image Processor- RestoBar</h1>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-restobar-app';
}
