import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {
  @Input('message') message: string;
  @Input('messageType') messageType: string;
  constructor() {}

  ngOnInit() {}
}
