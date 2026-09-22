import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  imports: [],
  selector: 'app-intro',
  styleUrl: './intro.scss',
  templateUrl: './intro.html',
})
export class Intro {
  constructor(public translation: Translation) {}
}
