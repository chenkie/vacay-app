import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { DestinationService } from '../destination/destination.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination-new',
  templateUrl: './destination-new.component.html',
  styleUrls: ['./destination-new.component.scss']
})
export class DestinationNewComponent implements OnInit {
  public destinationForm: FormGroup;
  public isLoading = false;

  constructor(
    public fb: FormBuilder,
    public destinationService: DestinationService,
    public router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.destinationForm = this.fb.group({
      name: new FormControl('', { validators: [Validators.required] }),
      description: '',
      price: '',
      image: ''
    });
  }

  public onSubmit(): void {
    if (this.destinationForm.valid) {
      this.isLoading = true;
      const destinationData = this.destinationForm.value;

      this.destinationService.postDestination(destinationData).subscribe(
        data => {
          this.isLoading = false;
          const newDestinationId = data.result._id;
          this.router.navigate(['destination', newDestinationId]);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
