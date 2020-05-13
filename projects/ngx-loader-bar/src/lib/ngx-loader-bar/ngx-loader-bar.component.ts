import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

/**
 *
 */
@Component({
  selector: 'ngx-loader-bar',
  templateUrl: './ngx-loader-bar.component.html',
  styleUrls: ['./ngx-loader-bar.component.css'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0, display: 'none' })),
      transition('out=>in', animate('500ms')),
      transition('in=>out', animate('500ms'))
    ])
  ]
})
export class NgxLoaderBarComponent implements OnInit {
  /**
   *
   */
  @Input() isLoaded;

  /**
   *
   */
  @Input() config = {
    color: 'dodgerblue',
    height: '5px',
    fadeInSecunds: '500ms',
    fadeOutSecunds: '500ms'
  };

  /**
   *
   */
  constructor() {
   }

  /**
   *
   */
  ngOnInit() {
  }

}
