import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { DestinationService } from '../destination/destination.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public destinations: any[] = [];
  constructor(
    public authService: AuthService,
    public destinationService: DestinationService,
    public router: Router
  ) {}

  ngOnInit() {
    this.getDestinations();
  }

  private getDestinations(): void {
    this.destinationService.getDestinations().subscribe(
      data => {
        this.destinations = data.result;
      },
      err => {
        console.log(err);
      }
    );
  }

  public goToDestination(id: string): void {
    this.router.navigate(['destination', id]);
  }
}
