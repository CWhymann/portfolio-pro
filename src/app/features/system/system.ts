import { Component } from '@angular/core';
import { Translation } from '../../core/translation';

@Component({
  imports: [],
  selector: 'app-system',
  styleUrl: './system.scss',
  templateUrl: './system.html',
})
export class System {
  constructor(public translation: Translation) {}
}
