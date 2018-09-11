import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination } from './destination.model';
import { DestinationService } from './destination.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
  public destination: Destination = {
    _id: '',
    name: '',
    description: '',
    price: '',
    image: ''
  };

  constructor(
    public route: ActivatedRoute,
    public destinationService: DestinationService,
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.getDestination(param.id);
    });
  }

  public getDestination(id: string): void {
    this.destinationService.getDestination(id).subscribe(
      data => {
        this.destination = data.result;
      },
      err => {
        console.log(err);
      }
    );
  }

  public deleteDestination(): void {
    if (confirm('Are you sure you want to delete this destination?')) {
      this.destinationService.deleteDestination(this.destination._id).subscribe(
        data => {
          this.router.navigate(['catalog']);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
