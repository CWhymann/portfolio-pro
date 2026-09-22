import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  imports: [],
  selector: 'app-work',
  styleUrl: './work.scss',
  templateUrl: './work.html',
})
export class Work {
  constructor(public translation: Translation) {}
}
