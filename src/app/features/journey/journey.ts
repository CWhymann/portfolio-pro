import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  imports: [],
  selector: 'app-journey',
  styleUrl: './journey.scss',
  templateUrl: './journey.html',
})
export class Journey {
  constructor(public translation: Translation) {}
}
