import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  imports: [],
  selector: 'app-capabilities',
  styleUrl: './capabilities.scss',
  templateUrl: './capabilities.html',
})
export class Capabilities {
  constructor(public translation: Translation) {}
}
