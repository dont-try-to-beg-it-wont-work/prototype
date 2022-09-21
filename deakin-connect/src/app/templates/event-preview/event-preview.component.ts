import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent {

  constructor() { }

  @Input() data : any = {};
}
