import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Destination } from './destination.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  public destinationImages: any[] = [
    {
      imageNum: 1,
      path:
        'https://res.cloudinary.com/dkpz9r2q7/image/upload/v1536608686/image-1_leeqbx.jpg'
    },
    {
      imageNum: 2,
      path:
        'https://res.cloudinary.com/dkpz9r2q7/image/upload/v1536608686/image-2_ff75ec.jpg'
    },
    {
      imageNum: 3,
      path:
        'https://res.cloudinary.com/dkpz9r2q7/image/upload/v1536608686/image-3_vgbird.jpg'
    },
    {
      imageNum: 4,
      path:
        'https://res.cloudinary.com/dkpz9r2q7/image/upload/v1536608686/image-4_selxxe.jpg'
    },
    {
      imageNum: 5,
      path:
        'https://res.cloudinary.com/dkpz9r2q7/image/upload/v1536608686/image-5_uy2l9m.jpg'
    },
    {
      imageNum: 6,
      path:
        'https://res.cloudinary.com/dkpz9r2q7/image/upload/v1536608686/image-6_ruekpg.jpg'
    },
    {
      imageNum: 7,
      path:
        'https://res.cloudinary.com/dkpz9r2q7/image/upload/v1536608686/image-7_ymmcqb.jpg'
    },
    {
      imageNum: 8,
      path:
        'https://res.cloudinary.com/dkpz9r2q7/image/upload/v1536608686/image-8_te5aei.jpg'
    },
    {
      imageNum: 9,
      path:
        'https://res.cloudinary.com/dkpz9r2q7/image/upload/v1536608686/image-9_d5zz1l.jpg'
    },
    {
      imageNum: 10,
      path:
        'https://res.cloudinary.com/dkpz9r2q7/image/upload/v1536608686/image-10_d4uzvq.jpg'
    }
  ];
  constructor(public http: HttpClient, public authService: AuthService) {}

  public getDestinations(): Observable<any> {
    return this.http.get('/api/destinations');
  }

  public getDestination(id: string): Observable<any> {
    return this.http.get(`/api/destinations/${id}`);
  }

  public postDestination(destination: Destination): Observable<any> {
    return this.http.post('/api/destinations', { data: destination });
  }

  public deleteDestination(id: string): Observable<any> {
    return this.http.delete(`/api/destinations/${id}`);
  }
}
