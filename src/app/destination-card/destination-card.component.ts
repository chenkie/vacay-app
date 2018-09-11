import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss']
})
export class DestinationCardComponent implements OnInit {
  @Input('planet')
  planet: any;
  constructor() {}

  ngOnInit() {}

  public truncate(description: string): string {
    return description.slice(0, 250).concat('...');
  }
}
