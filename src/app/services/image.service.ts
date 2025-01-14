import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) {}

  uploadImage(file: File, name: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);

    return this.http.post(`${this.apiUrl}/upload`, formData);
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
}
