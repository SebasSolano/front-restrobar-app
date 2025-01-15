import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  uploadImage(base64Image: string, name: string): Observable<any> {
    const payload = { image: base64Image, name };
    return this.http.post(`${this.apiUrl}/upload`, payload);
  }

  getImagesBetweenDates(startDate: string, endDate: string): Observable<any> {
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get(`${this.apiUrl}/images`, { params });
  }

  getImagesStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`);
  }

  deleteAllImages(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/images`);
  }
}
