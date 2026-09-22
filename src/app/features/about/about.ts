import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  constructor(public translation: Translation) {}
}
